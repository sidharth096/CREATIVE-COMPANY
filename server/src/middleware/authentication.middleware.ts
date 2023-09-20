import { NextFunction,Request,Response } from "express";
import { authServies } from "../controller/service/authService";
import { CustomRequest } from "../util/expressRoutes";



const authMiddleware = (req:Request,res:Response,next:NextFunction)=>{

    try {
        const customReq = req as CustomRequest;
        let token: string | null = "";
        if (
          customReq.headers.authorization &&
          customReq.headers.authorization.startsWith("Bearer")
        ) {
          token = customReq.headers.authorization.split(" ")[1];
        }
      
        if (!token) {
          return res.status(401).json({
            success: false,
            message: "Access denied",
          });
        }
        try {
          const { id, role }: any = authServies.verifyToken(token);
          customReq.payload = id;
      
          // if (!decoded) {
          //   return res.status(HttpStatus.UNAUTHORIZED).json({
          //     success: false,
          //     message: "Access denied",
          //   });
          // }
          next();
        } catch (error: any) {
          console.log(error.message);
        }

    } catch (error:any) {
        
    }

}
export default authMiddleware