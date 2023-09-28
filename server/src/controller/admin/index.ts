
import adminLoginController from "./adminLogin.controller";
import adminDesignCategoryController from "./adminDesignCategory.controller";
import adminGetAllUsersController from "./adminGetAllUsers.controller";
import adminGetAllWorkersController from "./adminGetAllWorkers.controller";
import { DependenciesData } from "../../entity/interface";

export = (dependencies:any)=>{
   return{
     adminLoginController:adminLoginController(dependencies),
     adminDesignCategoryController:adminDesignCategoryController(dependencies),
     adminGetAllUsersController:adminGetAllUsersController(dependencies),
     adminGetAllWorkersController:adminGetAllWorkersController(dependencies)

   }
}