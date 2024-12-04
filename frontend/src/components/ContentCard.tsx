import axios from "axios";
import Card from "./Card";
import { BACKEND_URL } from "../Config";
import { useEffect, useState } from "react";
import animation from "../assets/Animation - 1733220406074.webm"





export default function ContentCard({ContentAdded, onContentadd, Endpoint}: { ContentAdded: boolean,Endpoint: string, onContentadd: () => void}) {

    const [Loading, setLoading] = useState(true);
    const [contents, setContents] = useState([]);

    const getContent = async () => {
      if(ContentAdded==true || Loading==true){
        const res = await axios.get(`${BACKEND_URL}/v1/secondBrain/${Endpoint}`,  {
         headers: {
           "Authorization": localStorage.getItem("token")
         }
        })
      
        console.log(res)
        console.log(Endpoint)
       onContentadd();
       setLoading(false);
       setContents(res.data);
       console.log(contents)
    }
     
      }

      useEffect(() => {
        getContent()
      }, [ContentAdded, Loading, Endpoint])


      const deleteContent = async (id:string) => {
        const res = await axios.delete(`${BACKEND_URL}/v1/secondBrain/deleteContent`,  {
          data: {
           id
          },
          headers: {
            "Authorization": localStorage.getItem("token")

            
          }

          
         })

         console.log(res)

         setLoading(true);
       
     
      }

      if(Loading) {
        return <div className="flex justify-center items-center mt-40">
          <iframe src="https://lottie.host/embed/bbbe7b8f-1ffe-4627-9086-e9c556403b72/uJN3D0wOvR.lottie"></iframe>
        </div>
      }
  
    return (
        <>

            <div className="flex  flex-row flex-wrap p-4 inline-block rounded-xl justify-center items-center ">
           

                { 
                    contents.map(({type, Link, title,tag,  _id}: {
                      type: string,
                       Link: string,
                        title: string,
                         _id: string,
                         tag: string
                        }) => 
                        <span className="py-2.5 px-2" >
                        <Card deleteFunction={() => deleteContent(_id.toString())}  title={title} type={type} size='lg' variant='primary' tag={tag} image={Link} />
                        </span>
                    )
                }
                    
               




            </div>
        </>
    )
}