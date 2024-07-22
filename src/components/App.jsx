import React, { useEffect, useState } from 'react'
import Board from './Board'

const themes = ['slate', 'red', 'green', 'amber', 'blue']
const m = MatrixGenerator(8, 8, 0.12)  // Sample matrix to check

export default function App() {
  const [themeNo, setThemeNo] = useState(0)
  const [cols, setCols] = useState(5)

  const changeTheme = () => {
    document.body.classList.remove(themes[themeNo])
    document.body.classList.add(themes[(themeNo === themes.length-1) ? 0 : themeNo+1])
    setThemeNo((themeNo === themes.length-1) ? 0 : themeNo+1)
  }
  
  useEffect(() => {
    console.log(m) // Checking matrix in clg
    
  })
  
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="fixed top-4 right-4 px-4 py-2 bg-primary rounded-3xl font-bold"
        onClick={changeTheme}
      >
        Click Me
      </button>
      <input
        type='range'
        className='fixed top-4 left-4'
        min={1}
        max={20}
        step={1}
        value={cols}
        onChange={e => setCols(parseInt(e.target.value))}
      />
      <div>{cols}</div>
      <Board boxes={cols*cols} />
    </div>
  )
}

function MatrixGenerator(rows, cols, mineDensity) {
  let matrix = Array.from({length: rows}, () => Array.from({length: cols}, () => 0))

  let mines = Math.round(rows * cols * mineDensity)
  while (mines > 0) {
    let rrow = Math.floor(Math.random() * rows)
    let rcol = Math.floor(Math.random() * cols)
    console.log(rrow + ' ' + rcol + ' ' + matrix[rrow][rcol])
    if (matrix[rrow][rcol] == 0) {
      matrix[rrow][rcol] = 1
      mines-=1
      console.log(mines)
    }
  }
  return matrix
}