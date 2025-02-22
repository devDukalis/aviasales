import { useEffect } from "react"
import { Flex, Grid, Container, Text, Box } from "@mantine/core"

import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { setHasError, setSearchId, setStop, setTickets } from "@/redux/features/tickets"
import { selectAreFiltersActive } from "@/redux/selectors"
import { useGetSearchIdQuery, useGetTicketsBySearchIdQuery } from "@/services/api"
import Header from "@/components/Header"
import Logo from "@/components/Logo"
import Main from "@/components/Main"
import Aside from "@/components/Aside"
import TransferFilterList from "@/components/TransferFilterList"
import TicketFilterList from "@/components/TicketFilterList"
import TicketList from "@/components/TicketList"
import Error from "@/components/Error"
import styles from "@/components/App/styles.module.scss"
import theme from "@/theme"
import { pollingInterval } from "@/constants"

const App = () => {
  const dispatch = useAppDispatch()
  const { searchId, stop, hasError } = useAppSelector((state) => state.tickets)
  const areFiltersActive = useAppSelector(selectAreFiltersActive)

  const {
    data: searchIdData,
    isSuccess: isSearchIdSuccess,
    isFetching: isSearchIdFetching,
    isError: isSearchIdError,
  } = useGetSearchIdQuery()
  const {
    data: ticketsData,
    isSuccess: isTicketsSuccess,
    isFetching: isTicketsFetching,
    isError: isTicketsError,
  } = useGetTicketsBySearchIdQuery(searchId, {
    skip: !searchId || stop,
    pollingInterval: hasError || !areFiltersActive ? 0 : pollingInterval,
  })

  const isInitialLoading = !searchId || isSearchIdFetching
  const isFetching = isInitialLoading || isTicketsFetching

  useEffect(() => {
    dispatch(setHasError(isSearchIdError || isTicketsError))
  }, [dispatch, isSearchIdError, isTicketsError])

  useEffect(() => {
    if (isSearchIdSuccess && searchIdData) {
      dispatch(setSearchId(searchIdData))
    }
  }, [dispatch, isSearchIdSuccess, searchIdData])

  useEffect(() => {
    if (isTicketsSuccess && ticketsData) {
      dispatch(setTickets(ticketsData.tickets))
      dispatch(setStop(ticketsData.stop))
    }
  }, [dispatch, isTicketsSuccess, ticketsData])

  return (
    <Box className={styles.app}>
      <Container>
        <Header>
          <Flex justify="center" align="center" h={{ xs: 120, md: 160 }}>
            <Logo />
          </Flex>
        </Header>

        <Main>
          <Grid>
            <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
              <Aside c={theme.colors?.fontMain?.[0]}>
                <Text
                  size="xs"
                  ff={"Open-Sans-Semi-Bold"}
                  mb={20}
                  lts={"0.5"}
                  lh={"12px"}
                  p={"20 20 0 20"}>
                  {"Количество пересадок".toUpperCase()}
                </Text>
                <TransferFilterList />
              </Aside>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
              <TicketFilterList />
              {isSearchIdError && <Error message="Ошибка при поиске SearchId" />}
              {isTicketsError && <Error message="Ошибка при поиске билетов" />}
              {!isSearchIdError && !isTicketsError && <TicketList isFetching={isFetching} />}
            </Grid.Col>
          </Grid>
        </Main>
      </Container>
    </Box>
  )
}

export default App
