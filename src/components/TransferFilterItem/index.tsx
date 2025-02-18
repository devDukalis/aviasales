import { FC } from "react"
import { Group } from "@mantine/core"
import { useHover } from "@mantine/hooks"

import CustomCheckbox from "@/components/CustomCheckbox"
import theme from "@/theme"

type Props = {
  checked?: boolean
  onChange?: () => void
  value?: string
}

const TransferFilterItem: FC<Props> = ({ checked, onChange, value }) => {
  const { hovered, ref } = useHover()
  const isActive = checked || hovered

  return (
    <Group
      gap={"10px"}
      ref={ref}
      style={{
        backgroundColor: isActive ? theme.colors?.filterActive?.[0] : undefined,
        width: "100%",
        padding: "10px 20px",
      }}>
      <CustomCheckbox checked={checked} onChange={onChange} />
      <span>{value}</span>
    </Group>
  )
}

export default TransferFilterItem
