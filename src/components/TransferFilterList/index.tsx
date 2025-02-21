import { Group, Box } from "@mantine/core"

import TransferFilterItem from "@/components/TransferFilterItem"
import Empty from "@/components/Empty"
import { transferFilters } from "@/constants"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import { FlightTransferFilterKeys } from "@/models"
import { setFilterBy } from "@/redux/features/tickets"

const TransferFilterList = () => {
  const dispatch = useAppDispatch()
  const { filters, tickets } = useAppSelector((state: RootState) => state.tickets)

  const handleToggleFilter = (filter: FlightTransferFilterKeys) => {
    dispatch(setFilterBy(filter))
  }

  const isEmpty = Object.values(filters).every((value) => !value) && tickets.length === 0

  return (
    <>
      {isEmpty ? (
        <Empty />
      ) : (
        transferFilters.map((item, index) => (
          <Box
            key={index}
            h={20}
            mb={index < transferFilters.length - 1 ? 20 : 0}
            ff={"Open-Sans-Regular"}
            fz={13}>
            <Group gap={"xs"}>
              <TransferFilterItem
                value={item.label}
                checked={filters[item.key]}
                onChange={() => handleToggleFilter(item.key)}
              />
            </Group>
          </Box>
        ))
      )}
    </>
  )
}

export default TransferFilterList
