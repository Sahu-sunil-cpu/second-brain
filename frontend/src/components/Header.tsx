import axios from "axios";
import Button from "./Button";
import { PlusIcon } from "./Icon/Button-Icon/PlusIcon";
import { ShareIcon } from "./Icon/Button-Icon/ShareIcon";
import { Logo } from "./Logo";
import { SearchBar } from "./SearchBar";
import { BACKEND_URL } from "../Config";



export default function Header({ onOpen }: { onOpen: () => void }) {

  const shareContent = async () => {
    const res = await axios.delete(`${BACKEND_URL}/v1/secondBrain/deleteContent`,  {
     
      headers: {
        "Authorization": localStorage.getItem("token")

        
      }

      
     })

     console.log(res)

   
   
  }
  return (
    <>


      <div className=''>
       

        <div className='flex  justify-end pt-4 pr-8 pb-8 '>
           <div className="relative right-96">
          <SearchBar/>
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
            onClick={() => console.log(shareContent)}
            startIcon={<ShareIcon size='lg' />} >

          </Button>
          </div>
        </div>
     

    </>
  )

}