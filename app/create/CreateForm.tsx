"use client"

import { useRouter } from "next/navigation"
import { FormEventHandler, useCallback, useRef, useState } from "react"

export default function CreateForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const formRef = useRef(null)

  const handleSubmit: FormEventHandler = useCallback(async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const form = formRef?.current
    const formData = new FormData(form ?? undefined)
    const ticket = Object.fromEntries(formData)

    const res = await fetch("http://localhost:4000/tickets", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket)
    })

    if (res.status === 201) {
      router.refresh()
      router.push("/tickets")
    }
    setIsLoading(false)
  }, [isLoading, router])

  return (
    <form action="" onSubmit={handleSubmit} className="w-1/2 self-center flex flex-col m-auto" ref={formRef}>
      <label htmlFor="title">
        <span>Title: </span>
        <input type="text" required name="title" />
      </label>
      <label htmlFor="body">
        <span>Body: </span>
        <input type="text" required name="body" />
      </label>
      <label htmlFor="priority">
        <span>Priority: </span>
        <select required name="priority">
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </label>
      <label htmlFor="user_email">
        <span>Email: </span>
        <input type="text" required name="user_email" />
      </label>
      <button type="submit" className="btn-primary bg-slate-500 text-primary p-2 w-1/4 self-center" disabled={!!isLoading}>{!!isLoading ? "Adding" : "Submit"}</button>
    </form>
  )
}
