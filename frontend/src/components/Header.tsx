
import Button from "./Button";
import { PlusIcon } from "./Icon/Button-Icon/PlusIcon";
import { ShareIcon } from "./Icon/Button-Icon/ShareIcon";




export default function Header({ onOpen, onShare }: { onOpen: () => void, onShare: () => void }) {

  return <div>

    <div className=' flex  justify-end items-center'>


      <div className='flex   pt-2  ml-[600px]'>
       

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


