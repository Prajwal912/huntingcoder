import React from 'react'
import {useRouter} from 'next/router'

const slug = () => {
    const router = useRouter()
    const {slug} = router.query
  return (
 <>
 <main className='text-center'>
 <h1 className='font-bold text-3xl my-4'>Title of the page is {slug}</h1>
 <hr />
 <p className='px-[2rem] w-[60%] m-auto my-4 text-justify	'>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eaque nesciunt amet, nisi, dignissimos veritatis, eveniet rem repellendus nulla natus veniam ratione laborum accusantium vitae accusamus dicta expedita molestiae sint?
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi odio aliquid odit fugiat corporis sapiente, consectetur eveniet iure ipsam obcaecati corrupti cum, quia voluptates rem, ipsa explicabo dolor ipsum quaerat?
 </p>
 </main>
 </>
  )
}

export default slug