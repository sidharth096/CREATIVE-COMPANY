import {Server} from "http"
import configkey from "./config";
 

const PORT = configkey.PORT || 5000



const serverConfig = (server:Server)=>{

     server.listen(PORT,()=>{
          console.log(`server is started ${PORT}`);
          
     })
}

export default serverConfig 