import { useState } from "react"
import { Group, Stack } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import TicketFilterItem from "@/components/TicketFilterItem"

const ticketFilters = ["Самый дешевый", "Самый быстрый", "Оптимальный"]
const borderRadiusValues = ["5px 0 0 5px", "0", "0 5px 5px 0"]

const TicketFilterList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const matches = useMediaQuery("(max-width: 570px)")

  return matches ? (
    <Stack gap={10}>
      {ticketFilters.map((item, index) => (
        <TicketFilterItem
          value={item.toUpperCase()}
          key={index}
          borderRadius={"5px"}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </Stack>
  ) : (
    <Group gap={0} grow>
      {ticketFilters.map((item, index) => (
        <TicketFilterItem
          value={item.toUpperCase()}
          key={index}
          borderRadius={borderRadiusValues[index]}
          isActive={activeIndex === index}
          onClick={() => setActiveIndex(index)}
        />
      ))}
    </Group>
  )
}

export default TicketFilterList
