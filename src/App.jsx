import { useState } from 'react'
import Home from './pages/Home'
import Otpmodal from './pages/Otpmodal'
import { Routes, Route, Link } from "react-router-dom"
import MedicalInformation from './pages/MedicalInformation'
import MedicalDashboard from './pages/MedicalDashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Otpmodal" element={<Otpmodal />} />
      <Route path="/MedicalInformation" element={<MedicalInformation />} />
      <Route path="/MedicalDashboard" element={<MedicalDashboard />} />
    </Routes>
  
  )
}

export default App
