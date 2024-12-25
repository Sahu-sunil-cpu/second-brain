import { Tab } from "./Tab";
import { DocIcon, LinkIcon, TweetIcon, VideoIcon, DeleteIcon } from "./Icon/Tab-Icon/TabIcons";
import { ShareIcon } from "./Icon/Button-Icon/ShareIcon";
import Button from "./Button";
import ContentCard from "./ContentCard";
import { LinkVisit } from "./Icon/LinkVisit";
import { EditCard } from "./EditCard";
import { useEffect, useRef, useState } from "react";
import { SelectContent } from "./Card";


type CardVariant = "primary" | "secondary";
interface CardProps {
    title: string,
    description: string,
    image?: string,
    type: string,
    size: "sm" | "md" | "lg",
    variant: CardVariant,
}

const sizeVariant = {
    "sm": "max-h-52 max-w-40 ",
    "md": "h-52 w-44 ",
    "lg": "max-h-92 w-80"
}

const styleVariant = {
    "primary": "border-2 p-1 border-gray-200 rounded-lg  bg-white shadow-md",
    "secondary": "border-2  border-gray-200 rounded-lg px-2 pb-3 bg-white "
}

export default function ShareCard(props: CardProps) {

   
    return (
        <>
          
            <div className={`${styleVariant[props.variant]}`}>
                <span className={`${sizeVariant[props.size]} flex flex-col justify-between items-center`} >


                    {/* making tabs for specific type i.e. video, image, doc, tweet so there is no need
 to add icons anymore

 removing tags and share icon and delete icon into new ui/ux */}


                    {
                        props.type != "tweet" && <div className="grid grid-rows-4 grid-flow-col gap-3">
                            <div className="row-span-3">
                                <div className="grid grid-cols-4 grid-flow-col gap-1">
                                    <div className="col-span-1">
                                        <SelectContent type={props.type} link={props.image || "http://localhost:5173/dashboard"} />
                                    </div>
                                    <div className="col-span-3">
                                        {
                                            <ContentCard title={props.title} description={props.description} />
                                            //<Video link={props.image || ""} />
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="row-span-1 my-auto flex justify-end items-center " >

                                <div>
                                    <a href={props.image} target="_blank">
                                        <LinkVisit size="xl" />
                                    </a>
                                </div>

                            </div>
                        </div>
                    }

                    {
                        props.type == "tweet" && <div className="">
                            <div className="">
                                <SelectContent type={props.type} link={props.image || "http://localhost:5173/dashboard"} />

                            </div>
                        </div>
                    }
                </span>
            </div>
        </>
    )
}



