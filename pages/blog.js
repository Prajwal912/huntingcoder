import React from "react";
import { Inter } from "next/font/google";
import Style from "../styles/home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";

const Blog = () => {
const [Blogs, setBlogs] = useState([])

  useEffect(() => {
   fetch("http://localhost:3000/api/blogs")
   .then((a)=>{
    return a.json(); 
  }).then((parsed) =>{
      console.log(parsed);
      setBlogs(parsed)
    })
   },[])
  
  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center space-between p-10 ${inter.className}`}
      >
        <h1 className={`text-5xl font-semibold mb-5`}>Hunting Coders</h1>

        <div className="blogs">
          <div className={Style.blog}>
            <Link href={'/blogpost/learn-js'}>
            <h1 className={`text-2xl font-semibold text-center`}>
              How to learn Javascript in 2023
            </h1>
            </Link>
            <p className={`text-1xl`}>
              Javascript is the language used to design logic for web
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Blog;
