import React, { Component } from 'react'
import './LightsOut.css'
import Light from './Light'

export default class LightsOut extends Component {
  static defaultProps = {
    gridSize: 4
  }

  state = {
    // Use gridSize to determine lights
    board: [
      [false, false, false, true],
      [false, false, false, false],
      [true, false, true, true],
      [false, true, true, false]
    ]
  }

  toggle = (r, c) => {
    let board = [...this.state.board]
    board[r][c] = !board[r][c]
    // Above
    if (r > 0) board[r - 1][c] = !board[r - 1][c]
    // Below
    if (r < this.props.gridSize - 1) board[r + 1][c] = !board[r + 1][c]
    // Left
    if (c > 0) board[r][c - 1] = !board[r][c - 1]
    // Right
    if (c < this.props.gridSize - 1) board[r][c + 1] = !board[r][c + 1]

    this.setState({ board })
  }

  render() {
    let tableContent = []
    for (let y = 0; y < this.props.gridSize; y++) {
      let row = []
      for (let x = 0; x < this.props.gridSize; x++) {
        row.push(
          <Light
            isLit={this.state.board[y][x]}
            key={`${y}-${x}`}
            row={y}
            column={x}
            toggle={this.toggle}
          />
        )
      }
      tableContent.push(<tr key={y}>{row}</tr>)
    }

    if (!this.state.board.flat().includes(true)) {
      return (
        <div className='LightsOut-title'>
          <div className='LightsOut-winner'>
            <span className='neon-orange'>You</span>
            <span className='neon-blue'>Win!</span>
          </div>
        </div>
      )
    }
    return (
      <div className='LightsOut'>
        <div className='LightsOut-title'>
          <div className='neon-orange'>Lights</div>
          <div className='neon-blue'>Out</div>
        </div>
        <table className='LightsOut-grid'>
          <tbody>{tableContent}</tbody>
        </table>
      </div>
    )
  }
}
