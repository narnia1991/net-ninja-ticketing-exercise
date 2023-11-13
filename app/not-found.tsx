import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">Nothing to see here</h2>
      <p>
        Go back to the <Link href="/">Dashboard</Link>
      </p>
    </main>
  )
}
