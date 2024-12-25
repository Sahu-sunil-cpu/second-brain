import { useParams } from "react-router";
import axios from "axios";
import { BACKEND_URL } from "../Config";
import { useEffect, useState } from "react";
import ShareCard from "../components/ShareCard";





export function Share() {
    let { share } = useParams();
    const [Loading, setLoading] = useState(true);
    const [contents, setContents] = useState([]);
    const [type, setType] = useState("");

    const getContent = async () => {
        if (Loading == true) {
            const res = await axios.get(`${BACKEND_URL}/v1/secondBrain/${share}`, {
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            })

            console.log(res)

            //console.log(Endpoint)

            setLoading(false);

            if (typeof res.data == "object") {
                setContents(res.data);

            }

            setType(typeof res.data);

        }

    }

    useEffect(() => {
        getContent()
    }, [Loading])



    if (Loading) {
        return <div className="flex justify-center items-center mt-40">
            <iframe src="https://lottie.host/embed/bbbe7b8f-1ffe-4627-9086-e9c556403b72/uJN3D0wOvR.lottie"></iframe>
        </div>
    }
    return <div className="container bg-gray-100 mx-auto">


        <div className='grid grid-cols-6 gap-4'>

            <div className="flex  flex-row flex-wrap p-16   inline-block rounded-xl justify-center items-center col-span-6 ">


                {
                    type == "object" ? contents.map(({ type, Link, title, description, _id }: {
                        type: string,
                        Link: string,
                        title: string,
                        _id: string,
                        description: string
                    }) =>
                        <span className="py-8 px-4">
                            <button onClick={() => console.log(_id)}></button>
                            <ShareCard title={title} type={type} size='lg' variant='primary' description={description} image={Link} />
                        </span>
                    )
                        :
                        <div>
                            <p className="text-3xl">

                                This Brain Link is not shareable
                                or you are on wrong url...


                            </p>
                        </div>
                }

            </div>
        </div>
    </div>

}