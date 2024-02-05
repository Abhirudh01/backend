import mongoose, { mongo } from "mongoose"
import{DB_NAME} from "../constants.js"


const connectDB= async ()=>{
    try{
  const connectionInstance =  await mongoose.connect( `${process.env.MONGODB_URI}/${DB_NAME}`)
console.log(`\n MongoDb connected !! DB HOST: ${connectionInstance}`);//try this in console
    }
    catch(error){
        console.log("MONGODB conncection FAILED :" + error);
        process.exit(1)
    }
}



export default connectDB