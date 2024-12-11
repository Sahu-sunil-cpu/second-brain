import axios from "axios";
import Card from "./Card";
import { BACKEND_URL } from "../Config";
import { useEffect, useState } from "react";
import animation from "../assets/Animation - 1733220406074.webm"





export default function ContentCard({title, description}: { title: string,description: string}) {
return  <div className="grid grid-rows-4 grid-flow-col gap-1">
<div className="ml-2 font-medium text-lg row-span-1 max-w-56 ">
    <i className="">
    {title}
    </i>
</div>

<div className="row-span-3 max-w-60">
    {
        description ?  <p className="">{description}</p> : 
        <div className="text-2xl text-blue-600 mt-8 ml-8">no description!</div>
    }
 
</div>
</div>
   
}