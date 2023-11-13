import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="p-8">
        <h3 className="py-8">
          This is an exercise of using Next 13 with app directory thanks to <Link className="text-slate-300" target="_blank" rel="noreferrer nofollow noopener" href="https://www.youtube.com/watch?v=TJQbDPGzm0Y&list=PL4cUxeGkcC9jZIVqmy_QhfQdi6mzQvJnT">
            Net Ninja's Playlist
          </Link>
        </h3>
        <Link href={"/tickets"}>
          <button>
            Go To Tickets
          </button>
        </Link>
      </div>
    </main>
  )
}
