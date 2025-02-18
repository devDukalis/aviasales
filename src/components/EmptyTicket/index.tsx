import { FC } from "react"
import { Paper, Text } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import theme from "@/theme"
import { queries } from "@/constants"

const EmptyTicket: FC = () => {
  const matches = useMediaQuery(`(max-width: ${queries[0]})`)

  return (
    <Paper radius="5px" shadow="sm" p="md" mb="md" ff={"Open-Sans-Semi-Bold"}>
      <Text fz={matches ? 20 : 24} c={theme.colors?.fontMain?.[0]}>
        ⚠️ Билеты не найдены!
      </Text>

      <Text fz={matches ? 14 : 18} c={theme.colors?.fontSecond?.[0]}>
        🏃🏽‍♂️‍➡️ Возвращайтесь позже
      </Text>
    </Paper>
  )
}

export default EmptyTicket
