import { FC, ReactNode } from "react"

import styles from "@/components/Aside/styles.module.scss"

type Props = {
  children?: ReactNode
  c?: string
}

const Aside: FC<Props> = ({ children, c }) => {
  return (
    <aside className={styles.aside} style={{ color: c }}>
      {children}
    </aside>
  )
}

export default Aside
