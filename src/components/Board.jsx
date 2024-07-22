import React, { useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

function resizer() {
  return Math.min(window.innerWidth, window.innerHeight)*0.8
}

export default function Board({ rows, cols, mineMatrix }) {
  const [boxCount, setBoxCount] = useState(rows*cols)
  const [boardSize, setBoardSize] = useState(resizer())
  const boxRefs = useRef(
    Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => React.createRef())
    )
  )
  
  window.onresize = () => {
    console.log(resizer())
    setBoardSize(resizer())
  }

  const currentEl = (row, col) => boxRefs.current[row][col].current

  const getDisplay = (i, j) => {
    let current = currentEl(i, j)
    let validrows = [i]
    let validcols = [j]
    if (i-1 >= 0) validrows.push(i-1)
    if (j-1 >= 0) validcols.push(j-1)
    if (i+1 < rows) validrows.push(i+1)
    if (j+1 < cols) validcols.push(j+1)
    let count = 0
    validrows.forEach(r => {
      validcols.forEach(c => {
        if (currentEl(r,c).hasMine()) count += 1
      })
    })
    return count
  }

  useEffect(() => {
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        currentEl(i,j).element().onclick = () => {
          console.log('Clicked')
          console.log(currentEl(i,j).element())

          if (!currentEl(i,j).hasMine()) {
            console.log('Good 😎')
            currentEl(i,j).setDisplayNo(getDisplay(i,j))

          }
          else console.log('Game Over 💀')
          currentEl(i,j).clickBtn()

          // console.log(currentEl(i,j+1).hasMine())
          // currentEl(i,j+1).clickBtn()
        }
      }
    }
  })
  return (
    <div
      style={{width: boardSize+'px', gridTemplateColumns: `repeat(${cols}, 1fr)`}}
      className='grid bg-orange-950'
      onContextMenu={e => e.preventDefault()}
    >
      {
        mineMatrix.map((rows, i) => {
          return (
            <React.Fragment key={i}>
            {
              rows.map((cell, j) => {
                if (cell) return (
                  <Box
                    key={j}
                    ref={ boxRefs.current[i][j] }
                    size={boardSize/cols}
                    mine
                  />
                )
                else return (
                  <Box
                    key={j}
                    ref={ boxRefs.current[i][j] }
                    size={boardSize/cols}
                    // noOfMines={5}
                  />
                )
              })
            }
            </React.Fragment>
          )
          
        })
      }
    </div>
  )
}

Board.propTypes = {
  rows: PropTypes.number.isRequired,
  cols: PropTypes.number.isRequired,
  mineMatrix: PropTypes.array.isRequired,
}