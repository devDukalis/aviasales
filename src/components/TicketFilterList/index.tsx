import { useState } from "react"
import { Group, Stack } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"

import TicketFilterItem from "@/components/TicketFilterItem"
import { borderRadiusValues, queries, ticketFilters } from "@/constants"
import { useAppDispatch } from "@/redux/hooks"
import { setSortBy } from "@/redux/features/tickets"

const TicketFilterList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)
  const matches = useMediaQuery(`(max-width:  ${queries[1]})`)
  const dispatch = useAppDispatch()

  const handleFilterClick = (index: number, sortKey: string) => {
    setActiveIndex(index)
    dispatch(setSortBy(sortKey))
  }

  return matches ? (
    <Stack gap={10} mb={20}>
      {ticketFilters.map((item, index) => (
        <TicketFilterItem
          value={item.label.toUpperCase()}
          key={index}
          borderRadius={"5px"}
          isActive={activeIndex === index}
          onClick={() => handleFilterClick(index, item.key)}
        />
      ))}
    </Stack>
  ) : (
    <Group gap={0} grow mb={20}>
      {ticketFilters.map((item, index) => (
        <TicketFilterItem
          value={item.label.toUpperCase()}
          key={index}
          borderRadius={borderRadiusValues[index]}
          isActive={activeIndex === index}
          onClick={() => handleFilterClick(index, item.key)}
        />
      ))}
    </Group>
  )
}

export default TicketFilterList
