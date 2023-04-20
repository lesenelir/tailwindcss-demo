import Link from "next/link"

function Home() {
  return (
    <div className='min-h-full flex justify-center items-center'>
       <ul>
         <li><Link href={'/color'}>Color Page</Link></li>
       </ul>
    </div>
  )
}

export default Home
