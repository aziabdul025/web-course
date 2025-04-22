import { Routes, Route } from 'react-router'

import NavbarComponent from './components/NavbarComponent.jsx'
import FooterComponent from './components/FooterComponent.jsx'

import HomePage from './pages/HomePage.jsx'
import KelasPage from './pages/KelasPage.jsx'
import TestimonialPage from './pages/TestimonialPage.jsx'
import FaqPage from './pages/FaqPage.jsx'
import SyaratKetentuanPage from './pages/SyaratKetentuanPage.jsx'

function App() {
  return (
    <>
      <NavbarComponent />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/kelas' Component={KelasPage} />
        <Route path='/testimonial' Component={TestimonialPage} />
        <Route path='/Faq' Component={FaqPage} />
        <Route path='/syaratketen' Component={SyaratKetentuanPage} />
      </Routes>
      <FooterComponent />
    </>
  )
}

export default App
