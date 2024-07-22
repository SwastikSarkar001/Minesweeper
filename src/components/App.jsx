import React, { useEffect, useState } from 'react'
import Board from './Board'

const themes = ['slate', 'red', 'green', 'amber', 'blue']

export default function App() {
  const [themeNo, setThemeNo] = useState(0)
  const [cols, setCols] = useState(8)
  const [rows, setRows] = useState(8)
  const mineMatrix = mineMatrixGenerator(rows, cols, 0.12)

  const changeTheme = () => {
    document.body.classList.remove(themes[themeNo])
    document.body.classList.add(themes[(themeNo === themes.length-1) ? 0 : themeNo+1])
    setThemeNo((themeNo === themes.length-1) ? 0 : themeNo+1)
  }
    
  return (
    <div className="flex h-screen items-center justify-center">
      <button
        className="fixed top-4 right-4 px-4 py-2 bg-primary rounded-3xl font-bold"
        onClick={changeTheme}
      >
        Click Me
      </button>
      <Board rows={rows} cols={cols} mineMatrix={mineMatrix} />
    </div>
  )
}

function mineMatrixGenerator(rows, cols, mineDensity) {
  let matrix = Array.from({length: rows}, () => Array.from({length: cols}, () => 0))

  let mines = Math.round(rows * cols * mineDensity)
  while (mines > 0) {
    let rrow = Math.floor(Math.random() * rows)
    let rcol = Math.floor(Math.random() * cols)
    if (matrix[rrow][rcol] == 0) {
      matrix[rrow][rcol] = 1
      mines-=1
    }
  }
  return matrix
}