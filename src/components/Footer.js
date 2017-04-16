import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return <footer>
    <div className='logos'>
      <a href='thttps://twitter.com/ColinFendrick' title='Tweet me!'><span className='fa fa-twitter fa-5x logoLink' aria-hidden='true' /></a>
      <a href='https://www.facebook.com/jules.verne.58118' title='Facebook official!'><span className='fa fa-facebook fa-5x logoLink' aria-hidden='true' /></a>
      <a href='https://github.com/ColinFendrick' title='Github link!'><span className='fa fa-github fa-5x logoLink' aria-hidden='true' /></a>
    </div>
    </footer>
  }
}

export default Footer
