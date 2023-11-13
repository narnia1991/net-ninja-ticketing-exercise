import { notFound } from "next/navigation"
import { TicketType } from "../TicketList"
import ResolveButton from "./ResolveButton"

export const dynamicParams = false

export async function generateStaticParams() {
  const res = await fetch(`http://localhost:4000/tickets`)
  const tickets = await res.json()
  return tickets.map((ticket: TicketType) => ({ id: ticket.id }))
}

async function getTicket({ id }: { id: string }) {
  const res = await fetch(`http://localhost:4000/tickets/${id}`, {
    next: {
      revalidate: 60
    }
  })

  if (!res.ok) {
    notFound()
  }

  return res.json()
}

export default async function TicketDetails({ params }: any) {
  const ticket: TicketType = await getTicket({ id: params?.id ?? "" })

  return (
    <main>
      <nav>
        <h2>
          TicketDetails
        </h2>
      </nav>
      <div className="card">
        <h3>
          {ticket.title}
        </h3>
        <small>Created by {ticket.user_email}</small>
        <p>
          {ticket.body}
        </p>
        <div className={`pill ${ticket.priority}`}>{ticket.priority} priority</div>

      </div>
      <ResolveButton id={ticket.id} />
    </main>
  )
}
