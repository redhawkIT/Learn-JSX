import React, { Component } from 'react'

//  CSS imported ahead of time in ../index.js
//  This prevents FOUT (Flashes of Unstyled Content)
import '../styles/SCSS/index.scss'
import '../styles/LESS/index.less'
class UI extends Component {
  render () {
    return (
      <div id='app'>
        <header>Header</header>
        <div id='content'>{this.props.children}</div>
        <footer>Footer</footer>
      </div>
    )
  }
}

export default UI
