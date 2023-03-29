import mongoose from "mongoose";

const fastifycrudSchema= new mongoose.Schema(
    {
        name:{type:String, required:true, trim:true},
        age:{type:Number, required:true},
        fees:{type:mongoose.Decimal128, required:true, validate:(value) => value >=5000.5 }
      }
)

const fastifycrudModel= mongoose.model("fastifycrudcollection",fastifycrudSchema)

export default fastifycrudModel