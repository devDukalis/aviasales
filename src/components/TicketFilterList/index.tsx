import { useState } from "react"
import { Group } from "@mantine/core"

import TicketFilterItem from "@/components/TicketFilterItem"

const ticketFilters = ["Самый дешевый", "Самый быстрый", "Оптимальный"]
const borderRadiusValues = ["5px 0 0 5px", "0", "0 5px 5px 0"]

const TicketFilterList = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <Group gap={0}>
      {ticketFilters.map((item, index) => {
        return (
          <TicketFilterItem
            value={item.toUpperCase()}
            key={index}
            borderRadius={borderRadiusValues[index]}
            isActive={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          />
        )
      })}
    </Group>
  )
}

export default TicketFilterList
