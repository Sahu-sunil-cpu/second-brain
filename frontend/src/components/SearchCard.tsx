import { useState } from "react"
import { SearchBar } from "./SearchBar"
import { OffCanvas } from "./OffCanvas"


export function SearchCard() {

return <div>
   <OffCanvas location="bottom" Title="update" Element={<UpdateElement/>}/>
</div>
}

function UpdateElement() {
   return   <form action="" onSubmit={(e) => e.preventDefault()}>
   <div className="mb-5">

      <label htmlFor="title" className="block mb-2 text-sm   font-medium text-gray-900 dark:text-black">Title</label>
      <input type="text" id="title" className="bg-gray-50 shadow-inner  ring-blue-500/50    border  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="e.g. preety photos of cats" required />
   </div>

   <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 ">Your message</label>
   <textarea id="message"
      rows={4}
      className="block p-2.5 w-full text-sm caret-blue-500 focus:caret-indigo-500 shadow-inner text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 " placeholder="e.g. this photo is my favorite cat photo and i will buy her soon ..." required></textarea>


   <button type="submit" className="opacity-100 text-black bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-2">Submit</button>

</form>
}