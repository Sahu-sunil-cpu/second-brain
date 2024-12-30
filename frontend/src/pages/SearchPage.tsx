import { Logo } from "../components/Logo"



export function SearchPage() {

    return <div>
        <div className="fixed left-4 bottom-4">
            <Logo name='Second Brain' size='sm' />
        </div>

        <div className=" flex justify-between items-center flex-col mx-auto h-screen">
            <div className="row-span-1 p-3">
                <div className="h-32 w-[800px] bg-gradient-to-r from-cyan-200 to-blue-200 rounded-3xl p-3 flex">
                <img className={`size-7 `}
            src="https://img.icons8.com/external-vitaliy-gorbachev-blue-vitaly-gorbachev/60/external-brain-anatomy-vitaliy-gorbachev-blue-vitaly-gorbachev-1.png"
            alt="brain" />
            <div className="px-2">
                   <p className="text-lg mb-1.5 font-medium">Search your Brain easily with AI</p>
                   <p className="text-[17px]">write context in search box considering your respective brain title & description</p>
                   </div>
                </div>
            </div>

            <div className="mb-4">
                <FormInput />
            </div>

        </div>

    </div>

}




function FormInput() {
    return <form className="flex items-center  mx-auto px-3 py-8 ">
        <label htmlFor="simple-search" className="sr-only">Search</label>
        <div className="relative w-full">

            <input type="text" id="simple-search" className="bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg outline-2 outline-blue-500/50  block w-[750px] ps-10 p-2.5  " placeholder="give context..." required />
        </div>
        <button type="submit" className="p-3.5 ms-2 text-sm font-medium text-white bg-blue-400 rounded-lg border border-blue-500 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
            <span className="sr-only">Search</span>
        </button>
    </form>

}