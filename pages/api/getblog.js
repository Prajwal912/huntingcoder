import * as fs from 'fs'//fs is the file system to read the file from where the data is coming
//getblog?endpoint=how-to-learn-javascript
export default function handler(req, res) {
  fs.readFile(`blogData/${req.query.endpoint}.json`,"utf-8", (err, data) =>{
  if(err){
    res.status(500).json({error:"no such blog found"})
  }
   console.log(req.query.endpoint)
    res.status(200).json({data})
  })
}