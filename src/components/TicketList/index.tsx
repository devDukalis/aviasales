import { Button } from "@mantine/core"

import TicketItem from "@/components/TicketItem"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { selectSortedAndFilteredTickets, selectVisibleTickets } from "@/redux/selectors"
import Empty from "@/components/Empty"
import { increaseVisibleTickets } from "@/redux/features/tickets"

const TicketList = () => {
  const sortedTickets = useAppSelector(selectSortedAndFilteredTickets)
  const visibleTickets = useAppSelector(selectVisibleTickets)
  const dispatch = useAppDispatch()

  const handleLoadMoreTickets = () => {
    dispatch(increaseVisibleTickets())
  }

  if (!Array.isArray(sortedTickets) || sortedTickets.length === 0) {
    return <Empty />
  }

  return (
    <>
      {sortedTickets.slice(0, visibleTickets).map((ticket) => (
        <TicketItem data={ticket} key={ticket.id} />
      ))}
      {visibleTickets < sortedTickets.length && (
        <Button onClick={handleLoadMoreTickets} fullWidth mt="20px" tt={"uppercase"}>
          Показать еще 5 билетов!
        </Button>
      )}
    </>
  )
}

export default TicketList
