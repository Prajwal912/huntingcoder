// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from 'fs'//fs is the file system to read the file from where the data is coming
export default function handler(req, res) {
  fs.readdir("blogData", (err, data) =>{
    console.log(data)
    res.status(200).json({data})
  })
}
