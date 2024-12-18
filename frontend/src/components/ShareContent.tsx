import { useEffect, useState } from "react"
import { OffCanvas } from "./OffCanvas"
import axios from "axios";
import { BACKEND_URL } from "../Config";


export function ShareContent({share, onClose} : {share: boolean, onClose: () => void}) {
  const [link, setLink] = useState<string>("");
    console.log(share)
   const shareContent = async () => {

      const res = await axios.post(`${BACKEND_URL}/v1/secondBrain/share`, {
        share: true
      }, {
  
        headers: {
          "Authorization": localStorage.getItem("token")
        }
  
      })
  
      console.log(res.data);
  
      setLink(res.data);
    }

    useEffect(() => {
      shareContent();
    },[share, link])
    return <>
    {
       share &&  <div className="">
            <OffCanvas Element={<Input link={link}/>} onClose={onClose} Open={share}/>

        </div>
      }
      </>

}

function Input({link} : {link: string}) {
    return <div>
       <div className="mb-5 flex">
        <div  className="bg-gray-50 shadow-inner  ring-blue-500/50    border  text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " > 
        {link}
        </div>
        <button type="button" className="bg-slate-500 px-3 border rounded-lg mx-2 text-white    hover:bg-gray-400 duration-400  focus:ring  focus:ring-gray-500  focus:ring-offset-0">Copy</button>
      </div>
      </div>
    
  }



  function CopyButton() {

    return <div>
        
<div className="grid grid-cols-8 gap-2 w-full max-w-[23rem]">
    <label htmlFor="npm-install" className="sr-only">Label</label>
    <input id="npm-install" type="text" className="col-span-6 bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value="npm install flowbite" disabled readOnly/>
    <button data-copy-to-clipboard-target="npm-install" className="col-span-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 items-center inline-flex justify-center">
        <span id="default-message">Copy</span>
        <span id="success-message" className="hidden inline-flex items-center">
            <svg className="w-3 h-3 text-white me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
            Copied!
        </span>
    </button>
</div>

    </div>
  }