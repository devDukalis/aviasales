import { Flex } from "antd"

import Header from "@/components/Header"
import Logo from "@/components/Logo"
import styles from "@/components/App/styles.module.scss"

const App = () => {
  return (
    <div className={styles.app}>
      <Header>
        <Flex justify="center" align="center" style={{ height: 160 }}>
          <Logo />
        </Flex>
      </Header>
    </div>
  )
}

export default App
