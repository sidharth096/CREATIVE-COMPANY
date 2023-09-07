import express,{Application, urlencoded} from "express"
import cors from "cors"



const expressConfig = (app:Application)=>{
   app.use(cors())
   app.use(urlencoded({ extended:true }))

   
}

export default expressConfig