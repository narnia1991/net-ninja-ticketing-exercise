import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import Logo from "./Narnia Icon.png"

export default function Nav() {
  return (<>
    <nav className="py-4 flex justify-between">
      <div className='flex'>
        <Image
          src={Logo}
          alt="Narnia Icon"
          width="42"
          quality={100}
          placeholder='blur'
        />
        <h1>Narnia Ticketer</h1>
      </div>
      <div className='flex align-middle'>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
      </div>
    </nav>
    <hr />
  </>
  )
}
