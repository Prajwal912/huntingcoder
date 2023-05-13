import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

<header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
   
    <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 text-black hover:text-gray-900 font-bold">Home</a>
      <a class="mr-5 hover:text-gray-900 font-bold" href={"/about"}>About</a>
      <a class="mr-5 hover:text-gray-900 font-bold" href={"/blog"}>Blog</a>
      <a class="mr-5 hover:text-gray-900 font-bold" href={"/contact"}>Contact</a>
    </nav>
  
  </div>
</header>
    {/* head is for writing the title and decsription of the app */}
    <Head>
      <title>Hunting Coder</title>
      <meta name='description' content='A blog for hunting coders' />
      <meta name='keywords' content='nextjs, huntingcoder blog, hunting coder' />

    </Head>
    <main
      class={`flex min-h-screen flex-col items-center space-between p-10 ${inter.class}`}
    >

  <h1 class={`text-5xl font-semibold mb-5`} >
    Hunting Coders
  </h1>

  <p class=" flex w-full justify-center lg:w-auto mb-8">
    A blog for hunting coders by a Hunting Coders
  </p>
  
  <div class="blogs">
      <h2 className='text-center text-3xl font-semibold mb-5'>Popular Blogs</h2>

    <div class="blog-items">
      <h1 class={`text-2xl font-semibold text-center`}>How to learn Javascript in 2023</h1>
      <p class={`text-1xl`}>Javascript is the language used to design logic for web</p>
    </div>
    <div class="blog-items">
      <h1 class={`text-2xl font-semibold text-center`}>How to learn Javascript in 2023</h1>
      <p class={`text-1xl`}>Javascript is the language used to design logic for web</p>
    </div>
  
  </div>


 
    </main>
    </>
  )
}
