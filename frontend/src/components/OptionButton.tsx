

interface OptionButtonProps {
  text: string;
  setType?: any;
  onClick?: () => void;
}


export function OptionButton({text, setType, onClick}: OptionButtonProps) {
    return <div className="mb-5">
      <span  className="p-1.5 border border-purple-300 rounded-lg cursor-pointer  focus-within:shadow-lg hover:mx-1" onClick={(e) => setType(e.currentTarget.innerText)}>
       {text}
    </span>
    </div>
  }
  
  