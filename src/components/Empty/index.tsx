import { FC } from "react"
import { Paper, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import theme from "@/theme"
import { queries } from "@/constants"

const Empty: FC = () => {
  const matches = useMediaQuery(`(max-width: ${queries[0]})`)

  return (
    <Paper radius="5px" shadow="sm" p="md" mb="md" ff={"Open-Sans-Semi-Bold"}>
      <Text fz={matches ? 12 : 16} c={theme.colors?.fontMain?.[0]}>
        ⚠️ Рейсов, удовлетворяющих заданным условиям, не найдено!
      </Text>
    </Paper>
  )
}

export default Empty
