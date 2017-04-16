import React, { Component } from 'react'
import Sidebar from './Sidebar.js'
import Info from './Info.js'
import AboutMe from './AboutMe.js'
import Footer from './Footer.js'

class App extends Component {
  state = {
    profile: '',
    bio: '',
    name: '',
    gists: '',
    repos: ''
  }

  componentDidMount () {
    const url = 'https://api.github.com/users/colinfendrick'
    window.fetch(url)
    .then(r => r.json())
    .then(data => {
      this.setState({
        name: data.name,
        profile: data.avatar_url,
        bio: data.bio,
        gists: data.gists_url,
        repos: data.repos_url
      })
    })
  }

  render () {
    return <div className='everything'>
      <Sidebar />
      <div className='main'>
        <Info state={this.state} />
        <AboutMe />
        <Footer />
      </div>
    </div>
  }
}

export default App
