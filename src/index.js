
// require('dotenv').config({path: './env'})

import dotenv from "dotenv"
 
      import connectDB from "./db/index.js"

dotenv.config({
    path: './env'
})



connectDB()










/*
import express from "express"

const app=express()
;(async ()=> {     //; this is for the cleaning approach this is if e practice
try{

await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
app.on("error",(error)=>{//database is connected but our express is not able to talk
    console.error("ERRR: ",error);
    throw error
})

app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`);
})
}
catch(error){
    console.error("ERROR: ",error)
    throw error
}
})()
*/