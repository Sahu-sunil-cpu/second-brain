import axios from "axios";
import { CrossIcon } from "./Icon/CrossIcon";
import { BACKEND_URL } from "../Config";
import { useRef, useState } from "react";
import Button from "./Button";
import { Tags } from "./Tags";
import { OptionButton } from "./OptionButton";
import { OffCanvas } from "./OffCanvas";






const colors = ["red", "yellow", "green", "amber", "orange", "blue", "lime", "cyan", "sky", "violet", "purple", "pink"];


export function CreateContentModal({ open, onClose, onContentadd }: { open: boolean, onClose: () => void, onContentadd: () => void }) {
  const titleRef = useRef<HTMLInputElement>();
  const linkRef = useRef<HTMLInputElement>();
 const descriptionRef = useRef<HTMLInputElement>();
  const [type, setType] = useState<string>();


  const addContent = async () => {

    const title = titleRef.current?.value;
    const Link = linkRef.current?.value;
    const description = descriptionRef.current?.value;
    console.log(description)
   
    // console.log(titleRef.current?.value)
    // console.log(linkRef.current?.value)
    // console.log(typeRef.current?.value)
    const res = await axios.post(`${BACKEND_URL}/v1/secondBrain/addContent`, {
      title,
      Link,
      type,
      description,

    }, {
      headers: {
        "Authorization": localStorage.getItem("token")
      }
    })

    console.log(res)


    onClose();

    onContentadd();
  }

  return <div>
    {open && <div>
      
            {/* <div onClick={onClose}>
              <CrossIcon />
            </div> */} 

       
          <div className="">
            <OffCanvas onClose={onClose}  Open={open} location="bottom" Title="create" Element={<Input titleref={titleRef} linkref={linkRef} setType={setType} descriptionRef={descriptionRef} addContent={addContent} />
} />
          </div>
        </div>
    }

  </div>

}


function Input({ linkref, titleref, addContent, setType, descriptionRef}: {
  linkref: any,
  titleref: any,
  setType: any,
  descriptionRef: any,

  addContent: () => void,
}) {



  return <form className="" onSubmit={(e) => e.preventDefault()}>
    <div className="mb-5">
      <label htmlFor="title" className="block mb-2 text-md   font-base text-gray-900 dark:text-black">Title</label>
      <input ref={titleref} type="text" id="title" className="bg-gray-50 shadow-inner  ring-blue-500/50    border  text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="e.g. preety photos of cats" required />
    </div>
    <div className="mb-5">
      <label htmlFor="link" className="block mb-2   text-md font-base text-gray-900 dark:text-black">Paste your link</label>
      <input ref={linkref} type="text" id="link" className="bg-gray-50  shadow-inner border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-400 focus:border-blue-400  block w-full p-2.5 " placeholder="e.g. https://example.com/..." required />
    </div>



    <label htmlFor="" className="block mb-2 text-md font-base text-gray-900 dark:text-black">Choose link type</label>

    <div className="flex justify-evenly mt-1">

      <OptionButton text={"link"}  setType={setType}/>
      <OptionButton text={"tweet"} setType={setType} />
      <OptionButton text={"document"}  setType={setType}/>
      <OptionButton text={"video"}  setType={setType}/>


    </div>

    <label htmlFor="description" className="block mb-2 text-md font-base text-gray-900 ">Your description</label>
    <textarea id="message" 
     ref={descriptionRef} rows={4}
      className="block p-2.5 w-full text-md caret-blue-500 focus:caret-indigo-500 shadow-inner text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="e.g. this photo is my favorite cat photo and i will buy her soon ..."></textarea>
   




<div>
    <button onClick={addContent} type="submit" className="opacity-100 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-base rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Submit</button>
    </div>
  </form>

}




//  1.  form get submitted on empty data in inputs


