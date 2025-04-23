import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counters from './component/Counters.jsx'
import Footer from './component/Footer.jsx'
import Colorpicker from './component/Colorpicker.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header.jsx'
import Profile from './component/Profile.jsx'
import Notification from './component/Notification.jsx'


function App() {
  const [color, setColor] = useState('black');
   const [count, setCount] = useState(0);


  return (
    <>
      <BrowserRouter>
      <Header hcolor={color} />
        <Routes>
          <Route path='/' element={<Counters count={count} setCount={setCount} />} />
          <Route path='/color-picker' element={<Colorpicker color={color} setColor={setColor}/>} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/notification' element={<Notification />} />
        </Routes>
        <Footer counter={count} />
      </BrowserRouter>
      
    </>
  )
}

export default App
