import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../src/assets/css/style.css'
import { BrowserRouter as Routers, Routes, Route } from 'react-router-dom'
import Header from './layouts/Header'
import Home from './pages/Home'
import Footer from './layouts/Footer'
import ServicePage from './pages/ServicePage'
import ContactUs from './pages/ContactUs'
import Login from './pages/Login'
import AboutUs from './pages/AboutUs'
const App = () => {
  return (
    <div>
      <Routers>
        <Header/>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<AboutUs />}></Route>
          <Route path='/service' element={<ServicePage />}></Route>
          <Route path='/contact' element={<ContactUs />}></Route>
          {/* <Route path='/login' element={<Login />}></Route> */}
        </Routes>
        <Footer />
      </Routers>
    </div>
  )
}

export default App
