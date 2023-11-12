import { Request, Response } from "express";
import { DependenciesData } from "../../entity/interface";
import { authServies } from "../service/authService";

export = (dependcies: DependenciesData): any => {

    const { useCase: { getUserByEmail_useCase } } = dependcies

    const googleLoginUser = async (req: Request, res: Response) => {

        try {
            const userData = req.body

            const isExistingUser = await getUserByEmail_useCase(dependcies).execute(userData.email)
            console.log(isExistingUser);

            if (!isExistingUser) {
                return res.status(400).json({
                    success: false,
                    message: "User not found"
                })
            }
            const userId = isExistingUser._id
            const token = await authServies.generateToken({ id: userId, role: "user" })

            const { name, email, _id, phone } = isExistingUser;

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