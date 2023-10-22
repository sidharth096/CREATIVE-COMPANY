import { DependenciesData } from "../../entity/interface";
import configkey from "../../config";


export const verifyOtp_useCase = (dependcies: DependenciesData) => {

    const execute = async (phone: string,otp:string) => {
        console.log("uescase:", phone,otp);
     
            const accountSid = configkey.TWILIO_ACCOUND_SID;
            const authToken = configkey.TWILIO_AUTH_TOKEN;
            const verifySid = configkey.TWILIO_VERIFY_SID
            const client = require("twilio")(accountSid, authToken);
        
            return new Promise((resolve, reject) => {
                client.verify.v2.services(verifySid)
                    .verificationChecks.create({ to: `+91${phone}`, code: otp })
                    .then((verification_check: any) => {
                        console.log("5555555555555555555");
                    
                        if (verification_check.status === 'approved') {
                            console.log('Verification was approved.');
                            resolve(verification_check);
                        } else if (verification_check.status === 'pending') {
                            console.log('Verification is pending.');
                            resolve(verification_check);
                        } else {
                            console.log('Verification was not approved.');
                            reject(verification_check);
                        }
                    })
                    
                    
                    .catch((error: any) =>  {console.log("0000000"); reject(error)});
             })

    }

    return { execute }

}