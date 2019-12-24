import React, { Component } from 'react'
import './Light.css'

export default class Light extends Component {
  handleClick = evt => {
    this.props.toggle(this.props.row, this.props.column)
  }

  render() {
    const c = `Light${this.props.isLit ? ' Light-lit' : ''}`
    return <td className={c} onClick={this.handleClick}></td>
  }
}
