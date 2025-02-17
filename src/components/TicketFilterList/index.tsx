import { useState } from "react"
import { Group, Stack } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import TicketFilterItem from "@/components/TicketFilterItem"
import { borderRadiusValues, queries, ticketFilters } from "@/constants"

const TicketFilterList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const matches = useMediaQuery(`(max-width:  ${queries[1]})`)

  return matches ? (
    <Stack gap={10} mb={20}>
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
    <Group gap={0} grow mb={20}>
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
