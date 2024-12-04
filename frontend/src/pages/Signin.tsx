import axios from "axios";
import { useRef } from "react"
import { BACKEND_URL } from "../Config";
import { useNavigate } from "react-router-dom";



export default function Signin() {

  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
 // const mailRef = useRef<HTMLInputElement>();
 const navigate = useNavigate();

  const signin = async () => {
     
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
   // const mail = mailRef.current?.value;

    console.log(usernameRef.current?.value)
    console.log(passwordRef.current?.value)
  //  console.log(mailRef.current?.value)
     const res = await axios.post(`${BACKEND_URL}/v1/secondBrain/login`, {
        name: username,
        password,
        
       
     })
     //alert!("you have signed up")

     console.log(res)
     console.log(res)

     const jwt = res.data.token;

     console.log(jwt)

     localStorage.setItem("token", jwt)

     navigate("/dashboard");
    
  }

  return <div>
    <div className="h-screen w-screen fixed top-0 left-0">
        <div className="grid grid-cols-3 gap-1">
           <div className=" col-span-1">
              <img
               src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJlYWRpbmd8ZW58MHx8MHx8fDA%3D" alt="image" 
               className="h-screen w-screen " />
           </div>

           <div className="h-screen  bg-slate-100 col-span-2  mt-40 ml-72">
           
               <Input usernameRef={usernameRef} passwordRef={passwordRef} signin={signin}/>
           </div>
        </div>
    </div>
  </div>
}


function Input({usernameRef, passwordRef,  signin}: {usernameRef: any, passwordRef: any,  signin: () => void}) {

 

  return <div>
    <form className="max-w-sm" id="form" onSubmit={(e) => e.preventDefault()}>
  <div className="mb-5">
    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your Name</label>
    <input  ref={usernameRef} type="text" id="username" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
  </div>
 
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Your password</label>
    <input ref={passwordRef}  type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
  </div>
 
 
  <button type="submit" onClick={signin} className="text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register new account</button>
</form>
  </div>
}