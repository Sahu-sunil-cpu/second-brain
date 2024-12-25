import axios from "axios";
import Button from "./Button";
import { PlusIcon } from "./Icon/Button-Icon/PlusIcon";
import { ShareIcon } from "./Icon/Button-Icon/ShareIcon";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { BACKEND_URL } from "../Config";
import { useState } from "react";
import { ShareContent } from "./ShareContent";



export default function Header({ onOpen , onShare}: { onOpen: () => void, onShare: () => void }) {



  

 
  return <div>
   
    <div className=' flex  justify-end items-center'>


    <div className='flex   pt-2  ml-[600px]'>
      <div className="fixed bottom-12 right-12 cursor-pointer  p-3.5 border rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 hover:mb-2 duration-500">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 50 50" className="stroke-white stroke-2">
<path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
</svg>
      </div>


      <Button size={"md"}
        variant={"primary"}
        text={"Add Content"}
        onClick={onOpen}
        startIcon={<PlusIcon size='lg' />

        }>

      </Button>


      <Button size={"md"}
        variant={"secondary"}
        text={"Share Brain"}
       onClick={onShare}
        startIcon={<ShareIcon size='lg' />} >

      </Button>
    </div>
  </div>
  </div>




}


