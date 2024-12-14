
import './App.css'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin';
import Signup from './pages/Signup'
import Logout from './pages/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Video from './pages/Video';
import Tweet from './pages/Tweet';
import Document from './pages/Document';
import Link from './pages/Link';
import Layout from './Layout';
import NotFound from './pages/NotFound';
import { useState } from 'react';


function App() {
  const [contentAdded, setContentAdded] = useState(false);



  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout setContentAdded={setContentAdded}/>}>
       
        <Route path='/dashboard' element={<Dashboard contentAdded={contentAdded} OnContentAdded={() => setContentAdded(e => !e)}/>} />
        <Route path='/video' element={<Video contentAdded={contentAdded} OnContentAdded={() => setContentAdded(e => !e)}/>} />
        <Route path='/tweet' element={<Tweet contentAdded={contentAdded} OnContentAdded={() => setContentAdded(e => !e)}/>} />
        <Route path='/document' element={<Document  contentAdded={contentAdded} OnContentAdded={() => setContentAdded(e => !e)}/>} />
        <Route path='/link' element={<Link  contentAdded={contentAdded} OnContentAdded={() => setContentAdded(e => !e)}/>} />
        <Route path="*" element={<NotFound />} />
        </Route>

        <Route path='/signup' element={<Signup />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
    </BrowserRouter>

  )
}

export default App
