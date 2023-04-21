import Link from "next/link"

function Home() {
  return (
    <div className='min-h-full flex justify-center items-center'>
       <ul className='list-disc list-outside'>
         <li><Link href={'/color'}>Color Page</Link></li>
         <li><Link href={'/custom'}>Custom Page</Link></li>
         <li><Link href={'/typography'}>Typography Page</Link></li>
         <li><Link href={'/space'}>Space Page</Link></li>
         <li><Link href={'/flex'}>Flex Page</Link></li>
       </ul>
    </div>
  )
}

export default Home
