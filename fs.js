const fs=require('fs')

fs.writeFileSync("demo.txt","hello")

const data=fs.readFileSync("demo.txt","utf-8")  //utf-8 to vonvert to english readable

console.log(data);
