import { FC } from "react"
import { Button } from "@mantine/core"

type Props = {
  value?: string
  borderRadius?: string
  isActive?: boolean
  onClick?: () => void
}

const TicketFilterItem: FC<Props> = ({ value, borderRadius, isActive, onClick }) => {
  return (
    <Button
      h={{ base: 32, sm: 40, md: 50 }}
      fz={12}
      ff={"Open-Sans-Semi-Bold"}
      lts={0.5}
      lh={20}
      radius={borderRadius}
      variant={isActive ? "filled" : "default"}
      onClick={onClick}
      styles={(theme) => ({
        root: {
          backgroundColor: isActive ? theme.colors.bgHighlight[0] : theme.colors.bgSecond[0],
        },
      })}>
      {value}
    </Button>
  )
}

export default TicketFilterItem
