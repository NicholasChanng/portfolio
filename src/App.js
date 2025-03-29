import './App.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './components/Home'
// import Experience from './components/Experience';
// import Contact from './components/Contact Me';
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
      delay: 300,
    })
  }, [])
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path = "/experience" element = {<Experience/>}/>
        <Route path = "/contact" element = {<Contact/>}/> */}
        </Route>
      </Routes>
    </>
  )
}

export default App
