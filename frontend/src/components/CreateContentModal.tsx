import axios from "axios";
import { CrossIcon } from "./Icon/CrossIcon";
import { BACKEND_URL } from "../Config";
import { useRef, useState } from "react";
import Button from "./Button";
import { Tags } from "./Tags";
import { OptionButton } from "./OptionButton";






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
      <div className="h-screen w-screen bg-slate-800 fixed top-0 left-0 opacity-60 flex justify-center">

      </div>
      <div className="flex justify-center items-center fixed top-32 right-1/3 ">
        <span className="bg-white   w-80 p-3 rounded-md opacity-100 ">
          <div className="flex justify-end  ">

            <div onClick={onClose}>
              <CrossIcon />
            </div>

          </div>
          <div className="">
            <Input titleref={titleRef} linkref={linkRef} setType={setType} descriptionRef={descriptionRef} addContent={addContent} />
          </div>
        </span>

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



  return <form className="max-w-sm mx-auto opacity-100 flex flex-col" onSubmit={(e) => e.preventDefault()}>
    <div className="mb-5">
      <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Title</label>
      <input ref={titleref} type="text" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. preety photos of cats" required />
    </div>
    <div className="mb-5">
      <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Paste your link</label>
      <input ref={linkref} type="text" id="link" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. https://example.com/..." required />
    </div>



    <label htmlFor="" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Choose link type</label>

    <div className="flex justify-evenly mt-1">

      <OptionButton text={"link"}  setType={setType}/>
      <OptionButton text={"tweet"} setType={setType} />
      <OptionButton text={"document"}  setType={setType}/>
      <OptionButton text={"video"}  setType={setType}/>


    </div>

    <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
    <textarea id="message"  ref={descriptionRef}rows={4} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="e.g. this photo is my favorite cat photo and i will buy her soon ..."></textarea>
   





    <button onClick={addContent} type="submit" className="opacity-100 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Submit</button>
  </form>

}


function Textarea({}) {
  return <div>
  
  </div>
}





