import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Places from './pages/Places'
import About from './pages/About'
import Favourites from './pages/Favourites'

function App() {
  const [favourites, setFavourites] = useState([])

  const toggleFavourite = (place) => {
    setFavourites(prev =>
      prev.find(p => p.id === place.id)
        ? prev.filter(p => p.id !== place.id)
        : [...prev, place]
    )
  }

  return (
    <BrowserRouter>
      <Navbar favouriteCount={favourites.length} />
      <Routes>
        <Route path="/" element={<Home toggleFavourite={toggleFavourite} favourites={favourites} />} />
        <Route path="/places" element={<Places toggleFavourite={toggleFavourite} favourites={favourites} />} />
        <Route path="/about" element={<About />} />
        <Route path="/favourites" element={<Favourites toggleFavourite={toggleFavourite} favourites={favourites} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App