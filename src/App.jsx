// src/App.jsx
import { useState, useEffect } from 'react'
import HeroSection from './components/sections/HeroSection'
// import WeddingInfo from './components/sections/WeddingInfo'
// import CountdownTimer from './components/sections/CountdownTimer'
// import VenueMap from './components/sections/VenueMap'
// import ConfirmationForm from './components/sections/ConfirmationForm'
// import WishesSection from './components/sections/WishesSection'

import Header from './components/common/Header'
import Loading from './components/common/Loading'
import Footer from './components/common/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">

      {/* Header */}
      <Header/>

      {/* Hero Section */}
      <HeroSection />
      
      
     
      {/* Footer */}
      <Footer/>
    </div>
  )
}

export default App