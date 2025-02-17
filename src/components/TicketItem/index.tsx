import { FC } from "react"
import { Grid, Group, Image, Paper, Text, Stack } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import { Ticket } from "@/models"
import theme from "@/theme"
import {
  calculateFlightArrivalTime,
  formatFlightDuration,
  formatFlightTransfers,
  formatFlightPrice,
  formatFlightTime,
} from "@/utils"
import { baseUrlImage, queries } from "@/constants"

type Props = {
  data: Ticket
}

const TicketItem: FC<Props> = ({ data }) => {
  const { price, carrier, segments } = data
  const matches = useMediaQuery(`(max-width: ${queries[0]})`)

  return (
    <Paper radius="md" shadow="sm" p="md" mb="md" ff={"Open-Sans-Semi-Bold"}>
      <Group justify="space-between" mb="lg">
        <Text fz={24} c={theme.colors?.fontPrice?.[0]}>
          {formatFlightPrice(price)}
        </Text>
        <Image src={`${baseUrlImage}${carrier}.png`} w={110} alt={carrier} />
      </Group>

      {segments.map((segment, index) => (
        <Stack key={`${segment.date}-${index}`} gap="xs" mb="md">
          <Grid gutter="xs">
            {/* Первая пара колонок */}
            <Grid.Col span={matches ? 6 : 4}>
              <Text fz={12} c={theme.colors?.fontSecond?.[0]}>
                {segment.origin} - {segment.destination}
              </Text>
              <Text fz={14} c={theme.colors?.fontMain?.[0]}>
                {formatFlightTime(segment.date)} -{" "}
                {calculateFlightArrivalTime(segment.date, segment.duration)}
              </Text>
            </Grid.Col>

            <Grid.Col span={matches ? 6 : 3}>
              <Text fz={12} c={theme.colors?.fontSecond?.[0]}>
                В ПУТИ
              </Text>
              <Text fz={14} c={theme.colors?.fontMain?.[0]}>
                {formatFlightDuration(segment.duration)}
              </Text>
            </Grid.Col>

            {/* Вторая строка на мобильных */}
            <Grid.Col span={matches ? 12 : 5}>
              <Text fz={12} c={theme.colors?.fontSecond?.[0]} tt={"uppercase"}>
                {segment.stops.length === 0
                  ? "Без пересадок"
                  : `${segment.stops.length} ${formatFlightTransfers(segment.stops.length)}`}
              </Text>
              {segment.stops.length > 0 && (
                <Text fz={14} c={theme.colors?.fontMain?.[0]}>
                  {segment.stops.join(", ")}
                </Text>
              )}
            </Grid.Col>
          </Grid>
        </Stack>
      ))}
    </Paper>
  )
}

export default TicketItem
