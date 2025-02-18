import { Group, Box } from "@mantine/core"

import TransferFilterItem from "@/components/TransferFilterItem"
import { transferFilters } from "@/constants"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import {
  FlightTransferFiltersState,
  toggleAll,
  toggleFilter,
} from "@/redux/features/flightTransferFilters"

const TransferFilterList = () => {
  const dispatch = useAppDispatch()
  const filters = useAppSelector((state: RootState) => state.flightTransferFilters)

  const handleToggleAll = () => {
    dispatch(toggleAll())
  }

  const handleToggleFilter = (filter: Exclude<keyof FlightTransferFiltersState, "all">) => {
    dispatch(toggleFilter(filter))
  }

  return (
    <>
      {transferFilters.map((item, index) => {
        return (
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
                onChange={
                  item.key === "all"
                    ? handleToggleAll
                    : () =>
                        handleToggleFilter(
                          item.key as Exclude<keyof FlightTransferFiltersState, "all">,
                        )
                }
              />
            </Group>
          </Box>
        )
      })}
    </>
  )
}

export default TransferFilterList
