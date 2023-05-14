import React from 'react'
import Link from "next/link";
const Navbar = () => {
  return (
   <>
    <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href="/"
              className="mr-5 text-black hover:text-gray-900 font-bold"
            >
              Home
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900 font-bold">
              About
            </Link>
            <Link href="/blog" className="mr-5 hover:text-gray-900 font-bold">
              Blog
            </Link>
            <Link
              href="/contact"
              className="mr-5 hover:text-gray-900 font-bold"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
   </>
  )
}

export default Navbar