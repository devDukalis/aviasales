import TicketItem from "@/components/TicketItem"
import { tickets } from "@/constants"
import { generateUniqueKey } from "@/utils"

const TicketList = () => {
  return tickets.map((ticket) => <TicketItem data={ticket} key={generateUniqueKey()} />)
}

export default TicketList
