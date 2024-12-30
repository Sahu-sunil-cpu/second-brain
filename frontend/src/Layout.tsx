import { Link, Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useState } from "react";
import { CreateContentModal } from "./components/CreateContentModal";
import SidePan from "./components/SidePan";
import { SearchCard } from "./components/SearchCard";
import { ShareContent } from "./components/ShareContent";
import { SearchIcon } from "./components/Icon/Search-Icon";
//import ContentCard from "./components/ContentCard";



export default function Layout({ setContentAdded }: { setContentAdded: any }) {


    const [modalOpen, setModalOpen] = useState(false);

    const [endpoint, setEndpoint] = useState("contents");

    const [share, onShare] = useState(false);



    return (
        <>

            <CreateContentModal open={modalOpen} onClose={() => {
                setModalOpen(false)
            }} onContentadd={() => {
                setContentAdded(true)
            }} />


            <Link to="/searchBrain">
                <div className="fixed bottom-12 right-12 cursor-pointer  p-3.5 border rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg shadow-cyan-500/50 hover:mb-2 duration-500">
                    <SearchIcon />
                </div>
            </Link>


            <ShareContent share={share} onClose={() => onShare(false)} />

            <div className="container bg-gray-100 mx-auto">


                <div className='grid grid-cols-5 gap-4'>


                    <div className='col-span-1 '>
                        <SidePan setEndpoint={setEndpoint} />
                    </div>

                    <div className="col-span-4">

                        <div className="grid grid-rows-15  gap-4">
                            <div className="row-span-1 mx-auto ">
                                <Header
                                    onOpen={() => setModalOpen(true)}
                                    onShare={() => onShare(true)}
                                />
                            </div>


                            <div className="row-span-14">
                                <Outlet />
                            </div>

                        </div>
                        <SearchCard />
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



