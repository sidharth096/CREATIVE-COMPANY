import { NextFunction, Request, Response } from "express";
import { authServies } from "../controller/service/authService";
import { CustomRequest } from "../util/expressRoutes";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
  
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
      const { id, role }: any = await authServies.verifyToken(token);

      // Store user ID and role in customReq.payload
      // customReq.payload = { id, role };
      next();
    } catch (err: any) {

      if (err.name === "TokenExpiredError") {

        return res.status(401).json({ error: "Token has expired" });
      } else {

        return res.status(500).json({ error: err.message });
      }
    }
  } catch (err: any) {

    console.error(err); 
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default authMiddleware;
