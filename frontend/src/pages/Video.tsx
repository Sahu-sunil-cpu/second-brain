

import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { BACKEND_URL } from "../Config";



export default function Video({contentAdded, OnContentAdded} : {contentAdded: boolean, OnContentAdded: () => void}) {
    
 


    const [Loading, setLoading] = useState(true);
    const [contents, setContents] = useState([]);
  
  
  
    
  
  
  
    const getContent = async () => {
      if (contentAdded == true || Loading == true) {
        const res = await axios.get(`${BACKEND_URL}/v1/secondBrain/content/video`, {
          headers: {
            "Authorization": localStorage.getItem("token")
          }
        })
  
        console.log(res)
        //console.log(Endpoint)
        OnContentAdded();
        setLoading(false);
        setContents(res.data);
        console.log(contents)
      }
  
    }
  
    useEffect(() => {
      getContent()
    }, [contentAdded, Loading])
  
  
    const deleteContent = async (id: string) => {
      const res = await axios.delete(`${BACKEND_URL}/v1/secondBrain/deleteContent`, {
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
  
    if (Loading) {
      return <div className="flex justify-center items-center mt-40">
        <iframe src="https://lottie.host/embed/bbbe7b8f-1ffe-4627-9086-e9c556403b72/uJN3D0wOvR.lottie"></iframe>
      </div>
    }
  
    return   <div className="flex  flex-row flex-wrap p-4 inline-block rounded-xl justify-center items-center ">
  
  
          { contents != null ?  contents.map(({ type, Link, title, description, _id }: {
              description: string,
              Link: string,
              title: string,
              _id: string,
              type: string

            }) =>
              <span className="py-8 px-4" >
                <Card deleteFunction={() => deleteContent(_id.toString())} title={title} type={type} size='lg' variant='primary' description={description} image={Link} Id={_id.toString()}  contentAdded={OnContentAdded}/>
              </span>
            ) :
            <div>
            <img src="https://img.freepik.com/premium-vector/man-despair-data-leak_11197-392.jpg?uid=R175742995&ga=GA1.1.112156224.1725526120&semt=ais_hybrid" alt="" />
           </div>
          }

         
  
  
  
  
  
  
        </div>
}