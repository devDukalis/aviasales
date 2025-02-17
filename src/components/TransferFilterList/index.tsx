import { List, Group } from "@mantine/core"

import TransferFilterItem from "@/components/TransferFilterItem"
import { transferFilters } from "@/constants"

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
