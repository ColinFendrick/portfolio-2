import React, { Component } from 'react'
import Sidebar from './Sidebar.js'
import Info from './Info.js'
import AboutMe from './AboutMe.js'
import Footer from './Footer.js'

class App extends Component {
  render () {
    return <div className='everything'>
      <Sidebar />
      <div className='main'>
        <Info />
        <AboutMe />
        <Footer />
      </div>
    </div>
  }
}

export default App
