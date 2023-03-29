import fastifycrudModel from "../model/fastifyCrudModel.js";

class fastifycrudcontroller{
    static createDoc= async(request,reply)=>{
        try {
            const result= new fastifycrudModel(request.body)
            await result.save()
            reply.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static getAllDoc= async (request,reply)=>{
        try {
            const result= await fastifycrudModel.find()
            reply.send(result)
        } catch (error) {
            console.log(error)
        }
    }


    static getDocById= async (request,reply)=>{
        try {
            const result= await fastifycrudModel.findById(request.params.id)
            reply.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    
    static deleteDocById= async (request,reply)=>{
        try {
            const result= await fastifycrudModel.findByIdAndDelete(request.params.id)
            reply.send(result)
        } catch (error) {
            console.log(error)
        }
    }

    static updateDocById= async (request,reply)=>{
        try {
            const result= await fastifycrudModel.findByIdAndUpdate(request.params.id,request.body)
            reply.send(result)
        } catch (error) {
            console.log(error)
        }
    }

}


export default fastifycrudcontroller