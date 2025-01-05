import { ReactElement } from "react";


interface TabProps {
    title: String;
    onClick?: () => void;
    Icon: ReactElement;
    fontSize: "sm" | "md" | "lg";
}

const fontSize = {
    "sm": "text-base  font-normal ml-3 ",
    "md": "text-lg font-semibold ml-3  ",
    "lg": "text-2xl font-bold "
}


export function Tab(props: TabProps) {

    return <div className="flex items-center hover:bg-gray-200 rounded-md cursor-pointer" >
         <div className="my-1 ml-1">
        {props.Icon}
        </div>
        <div className={`${fontSize[props.fontSize]}`}>
        {props.title}
        </div>
    </div>
}