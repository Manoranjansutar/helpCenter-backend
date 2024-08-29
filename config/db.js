import mongoose from "mongoose";
import 'dotenv/config'


export const connectDB = async () =>{
   try {
    await mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log('DB connected!!!')
    })
   } catch (error) {
      console.error(error)
   }
}