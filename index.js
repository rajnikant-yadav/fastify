import fastify from "fastify";
import connectdb from "./db/connectdb.js";
import root from "./routes/root.js"
const app= fastify()
const dburl=process.env.dburl || "mongodb://localhost:27017"

connectdb(dburl)

app.register(root,{prefix:"/fastifycrud"})

app.listen({port:3000},async (error,address)=>{
    if(error) throw error
    console.log(`server running on ${address}`)
})
