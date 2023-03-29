import mongoose from "mongoose";
const connectdb= async (dburl)=>{
    try {
        const option={
            dbName:"fastifycrud"
        }

        await mongoose.connect(dburl,option)
        console.log("mongodb connected succesfully...")
    } catch (error) {
        console.log(error)
    }
}

export default connectdb