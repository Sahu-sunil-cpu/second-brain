import { NextFunction, Request, Response } from "express"
import jwt from 'jsonwebtoken'
import 'dotenv/config'


const secret = process.env.secret ;
console.log(secret);



export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const headers = req.headers['authorization'];
    console.log(headers as string)

    const decode = jwt.verify(headers as string, secret as string);
 
    if(decode){
        // @ts-ignore
        req.userId = decode;
        next();

        // // @ts-ignore
        console.log("uderid", decode, "cgfhjk")
      
    }else{
        res.status(403).json({
            message: "authentication error"
        })
    }

   
}