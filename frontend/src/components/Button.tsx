import { ReactElement } from "react";


interface ButtonProps {
  variant: "primary" | "secondary" | "success";
  size: "lg" | "md" | "sm";
  text: string;
  onClick?: () => void;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
}

 const ButtonVariants = {
 "primary": "border-black bg-purple-300 text-white text-white  ",
 "secondary": "bg-purple-200 text-purple-400",
 "success": "border-purple-600 border bg-purple-200 text-purple-600"
}

const sizeStyles = {
  "lg": "px-8 py-4 text-xl rounded-xl mx-1",
  "md": "px-4 py-2 text-md rounded-md mx-1",
  "sm": "px-2 py-1 text-sm rounded-sm mx-1",
}



export default function Button(props: ButtonProps) {
  return <button className={`${ButtonVariants[props.variant]} ${sizeStyles[props.size]} `} onClick={props.onClick}>
     <div className="flex justify-center items-center">
            {props.startIcon}
            <div className="pl-2 pr-2">
                {props.text}
            </div>
            {props.endIcon}
        </div>
   
    </button>
}


