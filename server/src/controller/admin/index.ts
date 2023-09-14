
import adminLoginController from "./adminLogin.controller";
import { DependenciesData } from "../../entity/interface";

export = (dependencies:any)=>{
   return{
     adminLoginController:adminLoginController(dependencies)
   }
}