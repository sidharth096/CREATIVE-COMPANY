import { DependenciesData } from "../../entity/interface";
import { Request,Response } from "express"

export = (dependcies:DependenciesData)=>{

    const{useCase:{verifyOtp_useCase}}=dependcies

   const verifyOtp = async(req:Request,res:Response)=>{
    try {
       console.log(req.body);
       
        const phone = req.body.phone
        const otpcode = req.body.otp
        const otp = otpcode.join('')

        const response = await verifyOtp_useCase(dependcies).execute(phone,otp)

        console.log("aaa",response);

        if(response.status==="approved"){
            return res.status(200).json({
                success:true,
                message:'OTP verified successfull',
                data:response
            })
        }
        
        if(response.status==="pending"){
            return  res.status(400).json({
                success:false,
                message:'Invali OTP ',
                data:response
            })
        }
        else{
            res.status(400).json({
                success:false,
                message:'Invalid OTP ',
                data:response
            })
        }
        
        
        
        
    } catch (error) {
        res.status(400).json({
            success:false,
            message:"error",error
        })
        console.error(error)
    }
   }
   return verifyOtp
}