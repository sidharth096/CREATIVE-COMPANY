import express, { Application } from "express"
import cors from "cors"
import expressConfig from "./express"
import serverConfig from "./server"
import http from "http"
import connectDb from "./config/db"



const app: Application  = express()
const server=http.createServer(app)

//express configurations
expressConfig(app)

//starting the server
serverConfig(server)

//database config
connectDb()






