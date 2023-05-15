import React from "react";
import { Inter } from "next/font/google";
import Style from "../styles/home.module.css";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed.allBlogs);
        setBlogs(parsed.allBlogs);
      });
  }, []);


  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center space-between p-10 ${inter.className}`}
      >
        <h1 className={`text-5xl font-semibold mb-5`}>Hunting Coders</h1>

        <div>


          {blogs?.map((blogItem) => {
            return <div className={Style.blog} key={blogItem.slug}>
                <Link href={`/blogpost/${blogItem.slug}`}>
                  <h1 className={`text-2xl font-semibold text-center mb-4`}>
                  {blogItem.title}
                  </h1>
                </Link>
                <p className={`text-1xl px-[10rem]`}>
                  {blogItem.content.substr(0,150)}...
                </p>
              </div>
          })}


        </div>
      </main>
    </>
  );
};

export default Blog;
 