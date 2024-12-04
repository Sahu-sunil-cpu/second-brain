


import SidePan from '../components/SidePan'
import Header from '../components/Header'
import ContentCard from '../components/ContentCard'
import { CreateContentModal } from '../components/CreateContentModal'
import { useState } from 'react'
import axios from 'axios'
import { BACKEND_URL } from '../Config'


function Dashboard() {

 const [ contentAdded, setContentAdded] = useState(false);

  const [ modalOpen, setModalOpen] = useState(false);

  const [endpoint, setEndpoint] = useState("contents")

return (
  <>
<CreateContentModal open={modalOpen}  onClose={ () => {
  setModalOpen(false)
}}  onContentadd={() => {
    setContentAdded(true)
}} />
<div className="container bg-gray-100 mx-auto">
  <Header onOpen={ () => {
  setModalOpen(true)
}}/>

<div className='grid grid-cols-5 gap-4'>


  <div className='col-span-1 '>
  <SidePan setEndpoint={setEndpoint}/>
  </div>

  <div className='col-span-4 '>
  <ContentCard ContentAdded={contentAdded} Endpoint={endpoint} onContentadd={() => {
    setContentAdded(false)
}}/>
  </div>
  </div>
  </div>

  </>
)
 
}

export default Dashboard;
