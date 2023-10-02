import { Request,Response } from "express";
import { DependenciesData } from "../../entity/interface";

export = (dependency:DependenciesData)=>{

    const{useCase:{getAllWorkers_useCase}}=dependency

    const adminGetAllWorkers = async(req:Request,res:Response)=>{

        const workers = await getAllWorkers_useCase(dependency).execute()
        

        if(!workers){
            return res.status(400).json({
                success: false,
                message: "error getting workers"
            })
        }

        const simplifiedWorkers = workers.map((worker:any) => {
            return {
              _id: worker._id,
              name: worker.name,
              email:worker.email,
              phone:worker.phone,
              job_title:worker.job_title    
            };
          });
        

        res.status(200).json({
            success: true,
            message: "Workers getting successfully",
            data: simplifiedWorkers
        })

    }

    return adminGetAllWorkers

}