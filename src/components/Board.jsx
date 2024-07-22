import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Box from './Box'

function resizer() {
  return Math.min(window.innerWidth, window.innerHeight)*0.8
}

export default function Board({ boxes }) {
  const [boxCount, setBoxCount] = useState(boxes)
  const [boardSize, setBoardSize] = useState(resizer())
  
  window.onresize = () => {
    console.log(resizer())
    setBoardSize(resizer())
  }
  
  useEffect(() => {
  })
  return (
    <div
      style={{width: boardSize+'px', gridTemplateColumns: `repeat(${Math.sqrt(boxCount) | 0}, 1fr)`}}
      className='grid bg-orange-950 aspect-square'
      onContextMenu={e => e.preventDefault()}
    >
      {
        [...Array(boxCount).keys()].map((value) => {
          return (
            <Box key={value} size={boardSize/Math.sqrt(boxCount)} noOfBombs={5} onClick={() => console.log(value)} />
          )
        })
      }
    </div>
  )
}

Board.propTypes = {
  boxes: PropTypes.number.isRequired,
}