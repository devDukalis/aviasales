import { Flex, Grid, Container, Text } from "@mantine/core"

import Header from "@/components/Header"
import Logo from "@/components/Logo"
import Main from "@/components/Main"
import Aside from "@/components/Aside"
import TransferFilterList from "@/components/TransferFilterList"
import TicketFilterList from "@/components/TicketFilterList"
import styles from "@/components/App/styles.module.scss"
import theme from "@/theme"

const App = () => {
  return (
    <div className={styles.app}>
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
                <Text size="xs" ff={"Open-Sans-Semi-Bold"} mb={20} lts={"0.5px"} lh={"12px"}>
                  {"Количество пересадок".toUpperCase()}
                </Text>
                <TransferFilterList />
              </Aside>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
              <TicketFilterList />
            </Grid.Col>
          </Grid>
        </Main>
      </Container>
    </div>
  )
}

export default App
