import Link from "next/link"
import { delayFetch } from "../helper"

async function getTickets() {

  await delayFetch()

  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0
    }
  })
  return res.json()
}

export type TicketType = {
  id: string,
  title: string,
  body: string,
  priority: string,
  user_email: string
}

export default async function TicketList() {
  const tickets = await getTickets()
  return (
    <>
      {
        tickets.map((ticket: TicketType) => (
          <div key={ticket.id} className="card my-4">
            <Link href={`/tickets/${ticket.id}`}>
              <h2>
                {ticket.title}
              </h2>
              <p>{ticket.body.slice(0, 200)}{ticket.body.length > 200 && "..."}</p>
              <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>
            </Link>
          </div>
        ))
      }</>
  )
}
