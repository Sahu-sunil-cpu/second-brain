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


    <div className='flex  justify-between pt-2  '>
      <div className="mr-44">
        <SearchBar />
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


