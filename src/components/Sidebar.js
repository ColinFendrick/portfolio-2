import React, { Component } from 'react'
import PopUpAboutMe from './PopUpAboutMe.js'

class Sidebar extends Component {
  _click = () => {
    console.log('hey')
  }

  render () {
    return <div className='sidebar'>
      <p className='useful'>Useful</p>
      <p className='links'>Links</p>
      <ul className='linkList'>
        <li className='sidebar1' onClick={this._click}>About me</li>
        <PopUpAboutMe />
        <li className='2' onClick={this._click}>2</li>
        <li className='3' onClick={this._click}>3</li>
      </ul>
    </div>
  }
}

export default Sidebar
