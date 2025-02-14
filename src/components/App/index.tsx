import { Flex, Group } from "@mantine/core"

import Header from "@/components/Header"
import Logo from "@/components/Logo"
import Main from "@/components/Main"
import Aside from "@/components/Aside"
import TransferFilterItem from "@/components/TransferFilterItem"
import styles from "@/components/App/styles.module.scss"

const App = () => {
  return (
    <div className={styles.app}>
      <Header>
        <Flex justify="center" align="center" style={{ height: 160 }}>
          <Logo />
        </Flex>
      </Header>

      <Main>
        <Aside>
          <Group gap="xs">
            <TransferFilterItem value="Все" />
          </Group>
          <Group gap="xs">
            <TransferFilterItem value="Без пересадки" />
          </Group>

          <Group gap="xs">
            <TransferFilterItem value="1 пересадка" />
          </Group>
          <Group gap="xs">
            <TransferFilterItem value="2 пересадки" />
          </Group>
          <Group gap="xs">
            <TransferFilterItem value="3 пересадки" />
          </Group>
        </Aside>
      </Main>
    </div>
  )
}

export default App
