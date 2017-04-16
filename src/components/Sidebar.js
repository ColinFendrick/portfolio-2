import React, { Component } from 'react'
import PopupAboutMe from './PopupAboutMe.js'
import PopupProjects from './PopupProjects.js'
import PopupTIY from './PopupTIY.js'
import Modal from './Modal.js'

class Sidebar extends Component {
  render () {
    return <div className='sidebar'>
      <div className='name'>
        <p>Colin</p>
        <p style={{paddingLeft: '10px'}}>Fendrick</p>
      </div>
      <ul className='linkList'>
        <li className='sidebar1'><a className='sidebarLink' href='https://medium.com/@colinfendrick/code-to-perdition-7b2c60d4e05c'>About me</a>
          <PopupAboutMe />
          <Modal />
        </li>
        <li className='sidebar2'><a className='sidebarLink' href='https://github.com/ColinFendrick'>Projects</a>
          <PopupProjects />
          <Modal />
        </li>
        <li className='sidebar3'><a className='sidebarLink' href='https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=the+iron+yard'>The Iron Yard</a>
          <PopupTIY />
          <Modal />
        </li>
      </ul>
    </div>
  }
}

export default Sidebar
