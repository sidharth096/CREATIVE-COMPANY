import userRouter from "./user";
import workerRouter from './worker'
import express from 'express'
import { DependenciesData } from "../entity/interface"


export const routes = (dependencies: DependenciesData)=> {
    const routes = express.Router();

    const user = userRouter(dependencies);
    const worker =workerRouter(dependencies)

    routes.use("/user", user)
    routes.use("/worker", worker)


    return routes
}

