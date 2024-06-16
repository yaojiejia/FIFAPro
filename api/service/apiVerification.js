import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv"

dotenv.config()
const prisma = new PrismaClient();
export const apiVeryfication = async (apiKey) => {
    try{
        const user = await prisma.user.findFirst({
            where:{
                apiKey: apiKey
            }
        })
        if(user){
            return true;
        }
        else{
            return false;
        }
    }
    catch(err){
        console.log(err)
        return { error: true, message: 'API Error, Please Check Documentation' };
    }
};

