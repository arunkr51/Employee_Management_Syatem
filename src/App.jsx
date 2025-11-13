import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import RegistrationPage from './Pages/RegistrationPage'
import ErrroPage from './Pages/ErrroPage'
import EditPage from './Pages/EditPage'

export default function App() {
  return (
    <>
      <h2 style={{textAlign:"center"}}>Employee Management Portal</h2>
        <BrowserRouter>
            <Navbar/>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/registration" element={<RegistrationPage/>}/>
                    <Route path="/edit/:id" element={<EditPage/>}/>
                    <Route path="/*" element={<ErrroPage/>}/>
                </Routes>

            <Footer/>
        </BrowserRouter>
    </>
  )
}
