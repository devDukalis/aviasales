import { FC } from "react"
import { Checkbox, CheckboxProps } from "@mantine/core"
import { useHover } from "@mantine/hooks"

import theme from "@/theme"

import CustomCheckboxIcon from "../../assets/img/checkbox.svg?react"

const CustomCheckboxIconWrapper: FC<{
  indeterminate?: boolean
  className: string
}> = ({ className }) => {
  return <CustomCheckboxIcon className={className} />
}

type CustomCheckboxProps = Omit<
  CheckboxProps,
  "icon" & {
    checked?: boolean
    onChange?: () => void
  }
>

const CustomCheckbox: FC<CustomCheckboxProps> = ({ checked, onChange, ...props }) => {
  const { hovered, ref } = useHover()
  const isActive = checked || hovered

  return (
    <Checkbox
      icon={CustomCheckboxIconWrapper}
      {...props}
      checked={checked}
      onChange={onChange}
      ref={ref}
      style={{
        backgroundColor: isActive ? theme.colors?.filterActive?.[0] : undefined,
      }}
    />
  )
}

export default CustomCheckbox
