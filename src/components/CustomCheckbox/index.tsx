import { FC, useState } from "react"
import { Checkbox, CheckboxProps } from "@mantine/core"

import CustomCheckboxIcon from "../../assets/img/checkbox.svg?react"

const CustomCheckboxIconWrapper: FC<{
  indeterminate?: boolean
  className: string
}> = ({ className }) => {
  return <CustomCheckboxIcon className={className} />
}

type CustomCheckboxProps = Omit<CheckboxProps, "icon">

const CustomCheckbox: FC<CustomCheckboxProps> = (props) => {
  const [checked, setChecked] = useState(false)

  const handleCheckboxChange = () => {
    setChecked(!checked)
  }

  return (
    <Checkbox
      icon={CustomCheckboxIconWrapper}
      {...props}
      checked={checked}
      onChange={handleCheckboxChange}
    />
  )
}

export default CustomCheckbox
