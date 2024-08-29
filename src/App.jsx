import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './Components/Navbar/NavBar'
import HeroSection from './Section/HeroSection/Hero'
import LayoutOfDegital from './Layout/DegitalLandingPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './Pages/HomePage/Homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<LayoutOfDegital/>}>
    <Route index element={<Homepage/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
