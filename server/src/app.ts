import express, { Application } from "express"
import cors from "cors"
import expressConfig from "./express"
import serverConfig from "./server"
import http from "http"
import connectDb from "./config/db"
import dependencies from "./config/dependency"
import { routes } from "./router"



const app: Application  = express()
const server=http.createServer(app)



//database config
connectDb()

//express configurations
expressConfig(app)

app.use("/api", routes(dependencies))

//starting the server
serverConfig(server)









