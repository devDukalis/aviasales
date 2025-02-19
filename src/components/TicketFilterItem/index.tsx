import { FC } from "react"
import { Button } from "@mantine/core"
import { useHover } from "@mantine/hooks"

import theme from "@/theme"

type Props = {
  value?: string
  borderRadius?: string
  isActive?: boolean
  onClick?: () => void
}

const TicketFilterItem: FC<Props> = ({ value, borderRadius, isActive, onClick }) => {
  const { hovered, ref } = useHover()

  return (
    <Button
      ref={ref}
      h={{ base: 32, sm: 40, md: 50 }}
      radius={borderRadius}
      variant={isActive ? "filled" : "default"}
      onClick={onClick}
      style={{ borderColor: hovered ? theme.colors?.borderHighlight?.[0] : undefined }}
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
