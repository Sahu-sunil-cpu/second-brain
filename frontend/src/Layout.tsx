import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { CreateContentModal } from "./components/CreateContentModal";
import SidePan from "./components/SidePan";
//import ContentCard from "./components/ContentCard";



export default function Layout({setContentAdded}: {setContentAdded: any}) {


    const [modalOpen, setModalOpen] = useState(false);

    const [endpoint, setEndpoint] = useState("contents")


    return (
        <>

            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false)
            }} onContentadd={() => {
                setContentAdded(true)
            }} />

            <div className="container bg-gray-100 mx-auto">


                <div className='grid grid-cols-5 gap-4'>


                    <div className='col-span-1 '>
                        <SidePan setEndpoint={setEndpoint} />
                    </div>

                    <div className="col-span-4">

                        <div className="grid grid-rows-15  gap-4">
                            <div className="row-span-1 mx-auto ">
                            <Header onOpen={() => {
                            setModalOpen(true)
                        }} />
                            </div>


                            <div className="row-span-14">
                            <Outlet />
                            </div>
                        
                        </div>
                       
                    </div>
                </div>
            </div >



         
        </>
    )
}





// import SidePan from '../components/SidePan'
// import Header from '../components/Header'
// import ContentCard from '../components/ContentCard'
// import { CreateContentModal } from '../components/CreateContentModal'
// import { useState } from 'react'
// import axios from 'axios'
// import { BACKEND_URL } from '../Config'


function Dashboard() {


    return (
        <>



            {/*  */}

        </>
    )

}

