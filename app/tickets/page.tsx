import Link from "next/link";
import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <div>
      <div className="flex justify-between">
        <h2>
          Tickets
        </h2>
        <Link className="flex my-2 bg-slate-500 text-primary content-center items-center justify-center px-2 font-bold hover:bg-slate-600" href={'/create'}>Create Ticket</Link>
      </div>
      <TicketList />
    </div>
  )
}
