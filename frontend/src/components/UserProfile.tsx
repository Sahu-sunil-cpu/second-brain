import { useState } from "react"
import { useNavigate } from "react-router-dom";


export function UserProfile() {

    const [hidden, setHidden] = useState(false);
    
    const navigate = useNavigate()

    const Logout = () => {
        localStorage.clear();
        navigate("/signin");

    }

    return <div>
        <div className="flex items-center justify-start">
            <span className="">
                <img className="w-12 h-12 border-2 rounded-full border-yellow-900 p-0.5 "
                    src="https://images.unsplash.com/photo-1732464508438-aab5691d1dae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8" alt="image" />
            </span>

            <div className="text-lg ml-3">
                Sunil Sahu
            </div>

            <div>
                <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 ml-5 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none  focus:ring-gray-50 " type="button" onClick={() => setHidden(!hidden)}>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                        <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                </button>


               { hidden && <div id="dropdownDots" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute">
                    <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownMenuIconButton">
                       
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Change photo</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 ">Earnings</a>
                        </li>
                    </ul>
                    <div className="py-2">
                        <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer" onClick={Logout}>Logout</p>
                    </div>
                </div>
}
            </div>
        </div>
    </div>
}