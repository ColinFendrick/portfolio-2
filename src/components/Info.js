import React, { Component } from 'react'

class Info extends Component {
  render () {
    return <div className='info'>
      <img
        src={this.props.state.profile}
        id='profile'
        alt='Profile picture'
      />
      <div className='infoBox'>
        <div id='talkArrow' />
        <p>Hi, I'm {this.props.state.name}</p>
        <p>{this.props.state.bio}</p>
      </div>
    </div>
  }
}

export default Info
