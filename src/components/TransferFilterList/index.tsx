import { List, Group } from "@mantine/core"

import TransferFilterItem from "@/components/TransferFilterItem"

const transferFilters = ["Все", "Без пересадок", "1 пересадка", "2 пересадки", "3 пересадки"]

const TransferFilterList = () => {
  return (
    <List listStyleType="none">
      {transferFilters.map((item, index) => {
        return (
          <List.Item
            key={index}
            h={20}
            mb={index < transferFilters.length - 1 ? 20 : 0}
            ff={"Open-Sans-Regular"}
            fz={13}>
            <Group gap={"xs"}>
              <TransferFilterItem value={item} />
            </Group>
          </List.Item>
        )
      })}
    </List>
  )
}

export default TransferFilterList
