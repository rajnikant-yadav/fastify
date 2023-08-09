// This is route folder
import fastifycrudcontroller from "../controller/fastifycrudcontroller.js"
async function router(fastify,option){

    fastify.post("/",fastifycrudcontroller.createDoc)
    fastify.get("/",fastifycrudcontroller.getAllDoc)
    fastify.get("/:id",fastifycrudcontroller.getDocById)
    fastify.delete("/:id",fastifycrudcontroller.deleteDocById)
    fastify.put("/:id",fastifycrudcontroller.updateDocById)

}

export default router