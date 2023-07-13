import React from 'react'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import {Navbar} from './components/Navbar'
import LoginForm from './components/LoginForm'
import Form from './components/Form'
import Dashboard from './components/Dashboard'

export const App = () => {
  return (
    <div className='App'>
     
      <div className='min-h-screen'>
        <div className='gradient-bg-welcome'>
          <Navbar/>
          <Welcome />
          {/* <Dashboard/> */}
        </div>
        <Footer />
        
      </div>
    </div>
  )
}
