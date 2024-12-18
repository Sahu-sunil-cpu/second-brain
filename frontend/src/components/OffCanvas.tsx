import { ReactElement, useState } from "react"
import Card from "./Card";
import { PlusIcon } from "./Icon/Button-Icon/PlusIcon";


interface OffCanvasProps {
    Element :ReactElement;
    Title?: string;
    onClose?: () => void;
    Open?: boolean;
}
export function OffCanvas(props: OffCanvasProps) {
      
     const [property, setProperty] = useState("")
     const handleClick = () => {
      setProperty("translate-y-full")

      setTimeout(() => {
          //@ts-ignore    fix it
         props.onClose();
      }, 200)

      
                    
     
     
     }
   
     return (
       <>
  { props.Open   && <div>
   
   {/* <div className="text-center">
      <button
             onClick={() => setProperty("")}
   
      className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" type="button" data-drawer-target="drawer-bottom-example" data-drawer-show="drawer-bottom-example" data-drawer-placement="bottom" aria-controls="drawer-bottom-example">
     {props.Title}
      </button>
   </div> */}
   
   
   <div id="drawer-bottom-example" className={`fixed bottom-0 px-16 py-12 right-12 z-40 p-4 overflow-y-auto rounded-t-3xl w-9/12 transition-transform bg-gray-200   ${property} grid grid-rows-6 grid-flow-col gap-3`  }  aria-labelledby="drawer-bottom-label">
      
       <button type="button" 
          onClick={handleClick}
   
       data-drawer-hide="drawer-bottom-example" aria-controls="drawer-bottom-example" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
         <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
         </svg>
         <span className="sr-only">Close menu</span>
      </button>
   
   <div className="row-span-6">
     {props.Element}
     </div>
       
     
   
   
      </div>
      </div>}
       </>
     )
}

