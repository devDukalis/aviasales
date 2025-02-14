import { FC } from "react"

import CustomCheckbox from "@/components/CustomCheckbox"

type Props = {
  checked?: boolean
  onChange?: () => void
  value?: string
}

const TransferFilterItem: FC<Props> = ({ checked, onChange, value }) => {
  return (
    <>
      <CustomCheckbox checked={checked} onChange={onChange} />
      <span>{value}</span>
    </>
  )
}

export default TransferFilterItem
