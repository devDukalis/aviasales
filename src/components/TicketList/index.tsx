import TicketItem from "@/components/TicketItem"
import { useAppSelector } from "@/redux/hooks"
import { selectSortedTickets } from "@/redux/selectors"
import EmptyTicket from "@/components/EmptyTicket"

const TicketList = () => {
  const sortedTickets = useAppSelector(selectSortedTickets)

  if (!Array.isArray(sortedTickets) || sortedTickets.length === 0) {
    return <EmptyTicket />
  }

  return sortedTickets.map((ticket) => <TicketItem data={ticket} key={ticket.id} />)
}

export default TicketList
