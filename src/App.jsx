import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navigation/navbar'
import Footer from './components/navigation/footer'
import Beranda  from './components/pages/beranda'
import Lokasi  from './components/pages/lokasi'
import Toko  from './components/pages/toko_minuman_solo/dongo2'

const App = () => {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/lokasi" element={<Lokasi />} />
        <Route path="/toko" element={<Toko />} />
      </Routes>
      <Footer />
    </div>
  </Router>
  )
}

export default App
