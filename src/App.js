import React from 'react'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import { Navbar } from './components/Navbar'

export const App = () => {
  return (
    <div className='App'>
     
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar/>
          <Welcome />
        </div>
        <Footer />
      </div>
    </div>
  )
}
