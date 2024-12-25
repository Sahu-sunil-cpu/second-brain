

import Button from "./Button";
import ContentCard from "./ContentCard";
import { LinkVisit } from "./Icon/LinkVisit";
import { EditCard } from "./EditCard";
import { useEffect, useState } from "react";

type CardVariant = "primary" | "secondary";
interface CardProps {
    title: string,
    description: string,
    image?: string,
    type: string,
    deleteFunction?: () => void,
    size: "sm" | "md" | "lg",
    variant: CardVariant,
    Id: string,
    contentAdded?: () => void;

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




export default function Card(props: CardProps) {

    const [editOpen, setEditOpen] = useState<boolean>(false);
  


    useEffect(() => {
        if (props.contentAdded)
            props.contentAdded()
    }, [editOpen])

    return (
        <>
            {
                editOpen && <EditCard EditOpen={editOpen} onClose={() => setEditOpen(e => !e)} Id={props.Id} />
            }
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
                            <div className="row-span-1 my-auto flex justify-between items-center " >
                                <div>
                                    <Button size="md" variant="tertiary" text="Delete" onClick={props.deleteFunction} />
                                    <Button size="md" variant="secondary" text="Edit" onClick={() => setEditOpen(e => !e)} />
                                </div>

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

                            <div className="row-span-1 my-auto">
                                <Button size="md" variant="tertiary" text="Delete" onClick={props.deleteFunction} />
                                <Button size="md" variant="secondary" text="Edit" />

                            </div>
                        </div>
                    }
                </span>
            </div>
        </>
    )
}





export function SelectContent({ type, link }: { type: string, link: string }) {




    return <div>

        <div className=' p-2 flex justify-center items-center '>
            {/* <blockquote  className="twitter-tweet" data-lang="en">
                <a  href={props.image?.replace("x", "twitter")}>{props.image?.replace("x", "twitter")}</a>
                </blockquote> */}
            {

                type == "tweet" && <blockquote className="twitter-tweet" data-lang="en">
                    {/* <p lang="en" dir="ltr" className="flex flex-col ">
                        <a href={link?.replace("x", "twitter")}>go to tweet link  </a>
                    </p> */}

                    <iframe src="https://lottie.host/embed/1cfb6aff-80a5-4623-8c9f-2fc6c7e30380/grMyzR6FOf.lottie"></iframe>
                    <a href={link?.replace("x", "twitter")}> </a>
                </blockquote>


            }




            {
                type != "tweet" && <div className="">
                    <a href={link} target="_blank" className="">
                        <img
                            src={`https://www.google.com/s2/favicons?domain=${link}&sz=${128}`} alt="image"
                            className="max-w-16 min-w-16 hover:opacity-85"
                        />

                        {/* <iframe src="https://docs.google.com/document/d/1VbPEobLdg07LJZpXWmFvfrW7heJVPxD09ov0uoHb2LA/edit?tab=t.0#heading=h.kpyv8z1j698z"  frameBorder="0"></iframe> */}

                    </a>
                </div>
            }


        </div>
    </div>
}


// function Video({ link }: { link: string }) {

//     const getYouTubeVideoId = (url: string) => {
//         const videoId = url.split('v=')[1]
//         const ampersandPosition = videoId.indexOf('&')
//         if (ampersandPosition !== -1) {
//             return videoId.substring(0, ampersandPosition)
//         }
//         console.log(videoId)
//         return videoId
//     }

//     return <div>
//         <div className="aspect-video mb-4 ">
//             <iframe
//                 // ref={videoRef}
//                 width="100%"
//                 height="100%"
//                 src={`https://www.youtube.com/embed/${getYouTubeVideoId(link)}?autoplay=0&rel=0&controls=1&enable`}
//                 title="YouTube video player"
//                 frameBorder="0"


//                 allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             //  allowFullScreen="0"

//             ></iframe>
//         </div>
//     </div>
// }

