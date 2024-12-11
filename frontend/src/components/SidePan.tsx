import Button from "./Button";
import { PlusIcon } from "./Icon/Button-Icon/PlusIcon";
import { ShareIcon } from "./Icon/Button-Icon/ShareIcon";
import { Logo } from "./Logo";
import React from 'react';
import { Tab } from "./Tab";
import { DocIcon, LinkIcon, TweetIcon, VideoIcon } from "./Icon/Tab-Icon/TabIcons";
import { LogoutIcon } from "./Icon/Button-Icon/LogoutIcon";
import { BrowserRouter, Links, useNavigate } from "react-router-dom";
import { Link } from "react-router";
import { UserProfile } from "./UserProfile";




export default function SidePan({ setEndpoint }: { setEndpoint: any }) {

    const navigate = useNavigate()

    const Logout = () => {
        localStorage.clear();
        navigate("/signin");

    }


    return (
        <>

            <span className="flex h-screen min-w-72 flex-col bg-white p-4 shadow-md rounded-r-xl fixed top-0 left-0    justify-evenly">
           
           <div className="mb-16">
            {/* <Button text="Logout" variant="success" size="sm" onClick={Logout} startIcon={<LogoutIcon size="md" />} /> */}
            <UserProfile/>
            </div> 
               
                <ul className="flex flex-col justify-evenly space-y-4 mb-80 relative bottom-12">
                    <li >




                        <Link to="/link">
                            <Tab
                                title={"Link"}
                                fontSize='sm'
                                Icon={
                                    <LinkIcon size='lg' />

                                }
                                setEndpoint={setEndpoint}
                            />
                        </Link>
                    </li>

                    <li >

                        <Link to="/tweet">
                            <Tab
                                title={"Tweet"}
                                fontSize='sm'
                                Icon={
                                    <TweetIcon size='lg' />
                                }
                                setEndpoint={setEndpoint}
                            />
                        </Link>
                    </li>

                    <li >
                        <Link to="/document">
                            <Tab
                                title={"Document"}
                                fontSize='sm'
                                Icon={
                                    <DocIcon size='lg' />
                                }
                                setEndpoint={setEndpoint}
                            />
                        </Link>
                    </li>
                    <li >
                        <Link to="/video">
                            <Tab
                                title={"Video"}
                                fontSize='sm'
                                Icon={
                                    <VideoIcon size='lg' />
                                }
                                setEndpoint={setEndpoint}
                            />
                        </Link>
                    </li>
                </ul>




                <div className="">
                    <Logo name='Second Brain' size='sm' />
                </div>


            </span>

        </>
    )

}








// const Sidebar = () => {
//   const [isOpen, setIsOpen] = React.useState(false);

//   return (
//     <div className="flex h-screen flex-col bg-gray-800 p-4">
//       <button
//         className="md:hidden lg:block text-gray-200 hover:text-white"
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <FaBars />
//       </button>
//       <ul className="flex flex-col justify-between">
//         <li className="text-lg font-bold">Dashboard</li>
//         <li className="text-lg font-bold">Settings</li>
//         <li className="text-lg font-bold">Earnings</li>
//         <li className="text-lg font-bold">Sign out</li>
//       </ul>
//       {isOpen && (
//         <ul className="bg-gray-700 p-2">
//           <li className="text-lg font-bold">Submenu 1</li>
//           <li className="text-lg font-bold">Submenu 2</li>
//         </ul>
//       )}
//     </div>
//   );
// };