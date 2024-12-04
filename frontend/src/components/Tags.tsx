import { useEffect, useState } from "react";


// const colors =  ["red",  "yellow",  "green",  "amber" , "orange", "blue" ,"lime", "cyan", "sky", "violet" , "purple" , "pink"] ;

interface TagProps {
  setTag: any;
   onClick?: () => void;
   tag: Array<string>;
}







export function Tags({setTag, onClick, tag}: TagProps) {

//     const [color, setColor] = useState("sky");

//    useEffect(() => {
//     const randomIndex = Math.floor(Math.random()*10) ;

//     const index = colors[randomIndex];

//     setColor(index)
//    },[color])

  
    return <div > 
      <div>
      <ul className={`*:rounded-full  *:border  *:mb-2  *:border-sky-100  *:font-thin   *:bg-sky-100  *:px-2  *:py-0.5  dark:text-sky-300  dark:*:border-sky-500/15 dark:*:bg-sky-500/10 flex flex-wrap justify-evenly`}>
      
    {
      tag.map((e) => <li onClick={(e) => setTag(e.currentTarget.innerText)} className="cursor-pointer	">#{e}</li> )
    }
      
     
    </ul>
    
  </div>
  </div>
  }


 