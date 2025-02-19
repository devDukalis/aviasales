import { Flex, Grid, Container, Text, Box } from "@mantine/core"

import Header from "@/components/Header"
import Logo from "@/components/Logo"
import Main from "@/components/Main"
import Aside from "@/components/Aside"
import TransferFilterList from "@/components/TransferFilterList"
import TicketFilterList from "@/components/TicketFilterList"
import TicketList from "@/components/TicketList"
import styles from "@/components/App/styles.module.scss"
import theme from "@/theme"

const App = () => {
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
              <TicketList />
            </Grid.Col>
          </Grid>
        </Main>
      </Container>
    </Box>
  )
}

export default App
