

interface OptionButtonProps {
  text: string;
  setType?: any;
  onClick?: () => void;
}


export function OptionButton({text, setType, onClick}: OptionButtonProps) {
    return <div className="mb-5">
      <button type="button" className="border border-purple-300 py-1.5 px-6 text-md rounded-md hover:bg-violet-100 active:bg-violet-400 focus:outline-none focus:ring focus:ring-violet-300 focus:ring-offset-2 " onClick={(e) => setType(e.currentTarget.innerText)}>
       {text}
    </button>
    </div>
  }
  
  