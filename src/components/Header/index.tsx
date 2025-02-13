import { FC, ReactNode } from "react"

import styles from "@/components/Header/styles.module.scss"

type Props = {
  children?: ReactNode
}

const Header: FC<Props> = ({ children }) => {
  return <header className={styles.header}>{children}</header>
}

export default Header
