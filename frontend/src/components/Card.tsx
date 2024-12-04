import { Tab } from "./Tab";
import { DocIcon, LinkIcon, TweetIcon, VideoIcon, DeleteIcon } from "./Icon/Tab-Icon/TabIcons";
import { ShareIcon } from "./Icon/Button-Icon/ShareIcon";

type CardVariant = "primary" | "secondary";
interface CardProps {
    title: string,
    tag: string,
    image?: string,
    type: string,
    deleteFunction?: () => void,
    size: "sm" | "md" | "lg",
    variant: CardVariant

}

const sizeVariant = {
    "sm": "max-h-52 max-w-40 ",
    "md": "h-52 w-44 ",
    "lg": "h-92 w-80"
}

const styleVariant = {
    "primary": "border-2 p-1 border-gray-200 rounded-lg px-2 pb-4 bg-white shadow-md",
    "secondary": "border-2  border-gray-200 rounded-lg px-2 pb-3 bg-white "
}


const IconFetcher = (type: string) => {
    if (type == "link") {
        return <LinkIcon size="lg" />
    } else if (type == "document") {
        return <DocIcon size='lg' />
    } else if (type == "video") {
        return <VideoIcon size="lg" />
    } else {
        return <TweetIcon size="lg" />
    }
}

export default function Card(props: CardProps) {




    return <div className={`${styleVariant[props.variant]}`}>
        <span className={`${sizeVariant[props.size]} flex flex-col justify-between items-center`} >

            <div className="flex justify-between w-80 items-center ">
                <div className="flex  w-80 items-center">
                    {IconFetcher(props.type)}
                    <div className="ml-2 font-medium text-lg">
                        {props.title}
                    </div>
                </div>





                <div className="flex w-16 justify-between">
                    <ShareIcon size="md" />

                    <div onClick={props.deleteFunction}>
                        <DeleteIcon size="md" />
                    </div>
                </div>

            </div>




            <SelectContent type={props.type} link={props.image || "http://localhost:5173/dashboard"} />

            <span className="flex justify-start w-80">
                <div className="bg-blue-100 max-w-28 text-sm rounded-full  p-1 mx-1">{props.tag}</div>
            </span>
        </span>
    </div>
}





function SelectContent({ type, link }: { type: string, link: string }) {

    const getYouTubeVideoId = (url: string) => {
        const videoId = url.split('v=')[1]
       const ampersandPosition = videoId.indexOf('&')
        if (ampersandPosition !== -1) {
            return videoId.substring(0, ampersandPosition)
        }
        console.log(videoId)
        return videoId
    }

    

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

                type == "video" && <div className="aspect-video mb-4">
                    <iframe
                        // ref={videoRef}
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${getYouTubeVideoId(link)}?autoplay=0&rel=0&controls=1&enable`}
                        title="YouTube video player"
                        frameBorder="0"

                        allow="accelerometer;  autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    //  allowFullScreen="0"

                    ></iframe>
                </div>


            }


            {
                type == "document" && <div>
                    <a href={link}>
                       <img 
                            src={`https://www.google.com/s2/favicons?domain=${link}&sz=${128}`} alt="image"
                            className="min-w-40 rounded-full"
                        />

{/* <iframe src="https://docs.google.com/document/d/1VbPEobLdg07LJZpXWmFvfrW7heJVPxD09ov0uoHb2LA/edit?tab=t.0#heading=h.kpyv8z1j698z"  frameBorder="0"></iframe> */}

                    </a>
                </div>
            }

            {// need to learn how to open link within div

                type == "link" && <div>

                    <a href={link}  >
                        <img 
                            src={`https://www.google.com/s2/favicons?domain=${link}&sz=${128}`} alt="image"
                            className="min-w-40 rounded-full"
                        />
                    </a>
                </div>



            }
        </div>
    </div>
}




