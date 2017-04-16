import React, { Component } from 'react'

class AboutMe extends Component {
  render () {
    return <div className='aboutMe'>
      <div className='oneList appGit'>
        <a href='http://snowman.colinfendrick.surge.sh/'><img className='appImage' src='one-list.png' alt='one list' title='One List' /></a>
        <div className='gitLink'><a href='https://github.com/ColinFendrick/one-list-two-list'>Git link</a></div>
      </div>
      <div className='roshambo appGit'>
        <a href='http://roshambo.colinfendrick.surge.sh/'><img className='appImage' src='roshambo.png' alt='roshambo' title='Roshambo' /></a>
        <div className='gitLink'><a href='https://github.com/ColinFendrick/roshambo'>Git link</a></div>
      </div>
      <div className='memory appGit'>
        <a href='http://memory.colinfendrick.surge.sh/'><img className='appImage' src='memory.png' alt='memory' title='Memory Match' /></a>
        <div className='gitLink'><a href='https://github.com/ColinFendrick/memory'>Git link</a></div>
      </div>
      <div className='tictactoe appGit'>
        <a href='http://tictactoe.colinfendrick.surge.sh/'><img className='appImage' src='tictactoe.png' alt='tic tac toe' title='Tic tac toe' /></a>
        <div className='gitLink'><a href='https://github.com/ColinFendrick/tictactoe'>Git link</a></div>
      </div>
    </div>
  }
}

export default AboutMe
