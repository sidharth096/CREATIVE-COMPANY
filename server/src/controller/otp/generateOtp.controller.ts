import { Request,Response } from "express"
import { DependenciesData } from "../../entity/interface";

export =(dependcies:DependenciesData)=>{

    const {useCase:{generateOtp_useCase}}=dependcies

    const generateOtp = async (req:Request,res:Response)=>{
        try {

            const phone=req.body.phone

            const response = await generateOtp_useCase(dependcies).execute(phone)

            return res.status(200).json({
                success:true,
                message:"OTP send",
                data:response
            })

            
        } catch (error) {
            
        }
    }

    return generateOtp
}