//import all packages
//loads .env files xontents into process.env by default
require('dotenv').config({ path: require('path').resolve(__dirname, '.env') })
const express= require('express')
const cors=require('cors')
const router=require('./Routes/routes')
require('./config/db')
//create server using express packages

const server=express()

//enable cors in server

server.use(cors())

server.use(express.json())

server.use(router)

//setup port number to run server in internet

const PORT=process.env.PORT

//start server to listen client request to that port

server.listen(PORT,()=>{
    console.log("server running and waiting for client request");
    
})

//resolve api(get request to http://localhost:3000/) using express

server.get('/',(req,res)=>{     // '/' is base url representation
res.status(200).send(`<h1>server running and waiting for client request</h1>`)
})


server.post('/',(req,res)=>{
    res.status(200).send("POST REQUEST")
})