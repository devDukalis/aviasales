import { FC } from "react"
import { Button, Center, Loader } from "@mantine/core"

import TicketItem from "@/components/TicketItem"
import Empty from "@/components/Empty"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { selectSortedAndFilteredTickets, selectVisibleTickets } from "@/redux/selectors"
import { increaseVisibleTickets } from "@/redux/features/tickets"

type Props = {
  isFetching?: boolean
}

const TicketList: FC<Props> = ({ isFetching }) => {
  const sortedTickets = useAppSelector(selectSortedAndFilteredTickets)
  const visibleTickets = useAppSelector(selectVisibleTickets)
  const dispatch = useAppDispatch()

  const handleLoadMoreTickets = () => {
    dispatch(increaseVisibleTickets())
  }

  if (!Array.isArray(sortedTickets) || sortedTickets.length === 0) {
    if (isFetching) {
      return (
        <Center>
          <Loader />
        </Center>
      )
    }
    return <Empty />
  }

  return (
    <>
      {sortedTickets.slice(0, visibleTickets).map((ticket) => (
        <TicketItem data={ticket} key={ticket.id} />
      ))}
      {isFetching ? (
        <Center>
          <Loader />
        </Center>
      ) : (
        visibleTickets < sortedTickets.length && (
          <Button onClick={handleLoadMoreTickets} fullWidth mt="20px" tt={"uppercase"}>
            Показать еще 5 билетов!
          </Button>
        )
      )}
    </>
  )
}

export default TicketList
