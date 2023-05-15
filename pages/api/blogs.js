// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'//fs is the file system to read the file from where the data is coming
export default async function handler(req, res) {
  let data = await fs.promises.readdir("blogData")
  let allBlogs = [];
  let myFile;
 for (let index = 0; index < data.length; index++) {
  const element = data[index];
  console.log(element)
  myFile = await fs.promises.readFile(("blogData/" + element), "utf-8")
  // allBlogs.push(myFile) //string json string format
  allBlogs.push(JSON.parse(myFile)) //converted into js format 
 }
    res.status(200).json({allBlogs})
}
