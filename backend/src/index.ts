import express from "express";
import { route } from "./route/routes"
import cors from 'cors';

const app = express();


// signup signin 



app.use(express.json())

app.use(cors());




app.use("/v1/secondBrain/", route);



app.listen(3000, () => {
    console.log("listening to port 3000");
})

