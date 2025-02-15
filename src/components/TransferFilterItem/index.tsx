import { FC } from "react"
import { Group } from "@mantine/core"

import CustomCheckbox from "@/components/CustomCheckbox"

type Props = {
  checked?: boolean
  onChange?: () => void
  value?: string
}

const TransferFilterItem: FC<Props> = ({ checked, onChange, value }) => {
  return (
    <Group gap={"10px"}>
      <CustomCheckbox checked={checked} onChange={onChange} />
      <span>{value}</span>
    </Group>
  )
}

export default TransferFilterItem
