import { Request, Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { authServies } from "../service/authService";

export = (dependcies: DependenciesData): any => {

    const { useCase: {getWorkerByEmail_useCase} } = dependcies

    const googleLoginUser = async (req: Request, res: Response) => {

        try {
            const workerData = req.body

            const isExistingWorker = await getWorkerByEmail_useCase(dependcies).execute(workerData.email)
            console.log(isExistingWorker);

            if (!isExistingWorker) {
                return res.status(400).json({
                    success: false,
                    message: "Worker not found"
                })
            }
            const workerId = isExistingWorker._id
            const token = await authServies.generateToken({ id: workerId, role: "worker" })

            const { name, email, _id, phone } = isExistingWorker;

            const responseData = {
                _id,
                name,
                email,
                phone
            }

            res.status(200).json({
                success: true,
                message: "Login successfull",
                data: responseData,
                token: token
            })
        } catch (error:any) {
            console.error(error.message)
        }

    }

    return googleLoginUser
}