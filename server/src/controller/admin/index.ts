
import adminLoginController from "./adminLogin.controller";
import adminDesignCategoryController from "./adminDesignCategory.controller";
import { DependenciesData } from "../../entity/interface";

export = (dependencies:any)=>{
   return{
     adminLoginController:adminLoginController(dependencies),
     adminDesignCategoryController:adminDesignCategoryController(dependencies)
   }
}