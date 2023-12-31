import userRouter from "./user";
import workerRouter from './worker'
import adminRouter from "./admin"
import designRouter from "./design"
import otpRouter from "./otp"
import express from 'express'
import { DependenciesData } from "../entity/interface"



export const routes = (dependencies: DependenciesData)=> {

    const routes = express.Router();

    const user = userRouter(dependencies);
    const worker =workerRouter(dependencies);
    const admin  = adminRouter(dependencies);
    const design = designRouter(dependencies)
    const otp = otpRouter(dependencies)

    routes.use("/user", user)
    routes.use("/worker", worker)
    routes.use("/admin",admin)
    routes.use("/design",design)
    routes.use("/otp",otp)


    return routes
}

