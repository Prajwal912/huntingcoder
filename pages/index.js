import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import Style from "../styles/home.module.css"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <style jsx>
  {`
  .dummy{
    font-size: 1.875rem;
    line-height: 2.25rem;
    text-align:center;
    font-weight:600;
    text-decoration:underline;
    margin-bottom: 1.25rem;
    // background:red;
    // color:white
  }
  `}
    </style>


      <header className="text-gray-600 body-font" >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href='/' className="mr-5 text-black hover:text-gray-900 font-bold">
              Home
            </Link>
            <Link href='/about' className="mr-5 hover:text-gray-900 font-bold">About</Link>
            <Link href='/blog' className="mr-5 hover:text-gray-900 font-bold">Blog</Link>
            <Link href='/contact' className="mr-5 hover:text-gray-900 font-bold">Contact</Link>
          </nav>
        </div>
      </header>
      {/* head is for writing the title and decsription of the app */}
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="A blog for hunting coders" />
        <meta
          name="keywords"
          content="nextjs, huntingcoder blog, hunting coder"
        />
      </Head>
      <main
        className={`flex min-h-screen flex-col items-center space-between p-10 ${inter.className}`}
      >
        <h1 className={`text-5xl font-semibold mb-5`}>Hunting Coders</h1>

        <p className=" flex w-full justify-center lg:w-auto mb-8">
          A blog for hunting coders by a Hunting Coders
        </p>

        <div className="blogs">
          <h2 className="dummy">
            Popular Blogs
          </h2>

          <div className={Style.blog}>
            <h1 className={`text-2xl font-semibold text-center`}>
              How to learn Javascript in 2023
            </h1>
            <p className={`text-1xl`}>
              Javascript is the language used to design logic for web
            </p>
          </div>
          <div className={Style.blog}>
            <h1 className={`text-2xl font-semibold text-center`}>
              How to learn Javascript in 2023
            </h1>
            <p className={`text-1xl`}>
              Javascript is the language used to design logic for web
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
