"use client"

import { useRouter } from "next/navigation"
import { useCallback } from "react"


export default function ResolveButton({ id }: { id: string }) {
  const router = useRouter()

  const handleResolve = useCallback(async () => {
    const res = await fetch(`http://localhost:4000/tickets/${id}`, {
      method: "DELETE",
    })

    if (!!res.ok) {
      router.refresh()
      router.push("/tickets")
    }

  }, [id])

  return (
    <button className="bg-slate-500 p-2 w-1/8 right-0 block absolute mr-12" onClick={handleResolve}>Resolve</button>
  )
}
