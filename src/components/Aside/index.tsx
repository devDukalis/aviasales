import { FC, ReactNode } from "react"

type Props = {
  children?: ReactNode
}

const Aside: FC<Props> = ({ children }) => {
  return <aside>{children}</aside>
}

export default Aside
