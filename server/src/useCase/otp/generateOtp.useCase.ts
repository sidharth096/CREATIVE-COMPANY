import { DependenciesData } from "../../entity/interface";
import configkey from "../../config";


export const generateOtp_useCase = (dependcies: DependenciesData) => {

    const execute = async (phone: string) => {
        try {
            
            const accountSid = configkey.TWILIO_ACCOUND_SID;
            const authToken = configkey.TWILIO_AUTH_TOKEN;
            const verifySid = configkey.TWILIO_VERIFY_SID
            const client = require("twilio")(accountSid, authToken);
            console.log(client);
            
        
            return client.verify.v2.services(verifySid)
                .verifications.create({ to: `+91${phone}`, channel: "sms" });
                
        } catch (error) {
            console.error(error)
        }

    }

    return { execute }

}