import React, { useReducer, useState } from 'react'
import PropTypes from 'prop-types'
import Flag from '../assets/Flag'
import Guess from '../assets/Guess'
import Mine from '../assets/Mine'

const colors = {
	1: 'blue',
	2: 'green',
	3: 'red',
	4: 'darkblue',
	5: 'purple',
	6: 'darkred',
	7: 'teal',
	8: 'black'
}

/**
 * This function will help to **change the `state` of the box** based on the **`status` number**.
 * 
 * The following truth table shows the mapping of status flags with the following states:
 * 
 * A - Denotes whether it is opened or not\
 * B - Denotes whether it is flagged or not\
 * C - Denotes whether it is guessed or not\
 * D - Denotes whether it has bomb or not
 * 
 * 
 * Here, we can set the states of the box based on the following bitwise operation:\
 * `A = S0 & S1`, `B = S0 & ~S1`, `C = ~S0 & S1`, `D = S2`, where\
 * `S0`, `S1`, `S2` are `status` flags and `S0` is the leftmost bit
 * 
 * @example
 * |        |    Status Flags    |       States of Box       |
 * | Status | ------------------ | ------------------------- |
 * |        |  S0  |  S1  |  S2  |   A  |   B  |   C  |   D  |
 * | ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
 * |   0    |   0  |   0  |   0  |   0  |   0  |   0  |   0  |
 * |   1    |   0  |   0  |   1  |   0  |   0  |   0  |   1  |
 * |   2    |   0  |   1  |   0  |   0  |   0  |   1  |   0  |
 * |   3    |   0  |   1  |   1  |   0  |   0  |   1  |   1  |
 * |   4    |   1  |   0  |   0  |   0  |   1  |   0  |   0  |
 * |   5    |   1  |   0  |   1  |   0  |   1  |   0  |   1  |
 * |   6    |   1  |   1  |   0  |   1  |   0  |   0  |   0  |
 * |   7    |   1  |   1  |   1  |   1  |   0  |   0  |   1  |
 * 
 * @param {object} state The current state of the box
 * @param {number} newStatus New status number to set status of the box
 * @returns {object} The new state of the box
 */
function reducer(state, newStatus) {
	if (newStatus >= 0 && newStatus <= 7) {
		let s = newStatus.toString(2).padStart(3, '0').split('')
		// console.log(s)
		
		const newState = { isOpened: !!(s[0] & s[1]), isFlagged: !!(s[0] & ~s[1]), isGuessed: !!(~s[0] & s[1]), hasBomb: state.hasBomb }
		// console.log(newState)
		return newState
	}
	else return state
}

export default function Box({ bomb = false, size, noOfBombs = -1 }) {
	const initProps = {
		isOpened: false,
		isFlagged: false,
		isGuessed: false,
		hasBomb: bomb
	}
	const newSize = size-24
	const [boxProps, dispatch] = useReducer(reducer, initProps)
	const [status, setStatus] = useState(boxProps.hasBomb ? 1 : 0)
	const setStatusFlag = (newStatus) => {
		setStatus(newStatus)
		dispatch(newStatus)
	}
	const btnClicked = (e) => {
		if (status === 0 || status === 1) {
			e.target.disabled = true
			setStatusFlag(boxProps.hasBomb ? 7 : 6)
		}
	}
	const btnContextClicked = (e) => {
		e.preventDefault()
		if (status === 0 || status === 1) setStatusFlag(boxProps.hasBomb ? 5 : 4)
		else if (status === 2 || status === 3) setStatusFlag(boxProps.hasBomb ? 1 : 0)
		else if (status === 4 || status === 5) setStatusFlag(boxProps.hasBomb ? 3 : 2)
	}
  return (
    <button
			className='flex cursor-pointer disabled:cursor-auto size-max relative rounded-[10%] p-3 enabled:bg-gradient-to-br enabled:from-primary-lighter enabled:from-20% enabled:to-primary-darker disabled:bg-primary disabled:shadow-disabled disabled:pointer-events-none enabled:before:absolute enabled:before:inset-[12%] enabled:before:rounded-[10%] enabled:before:content-[""] enabled:before:bg-primary'
			onClick={btnClicked}
			onContextMenu={btnContextClicked}
		>
      { boxProps.isOpened ? boxProps.hasBomb ? <Mine size={newSize} /> : <div style={{width: newSize+'px', height: newSize+'px', fontSize: newSize+'px', color: colors[noOfBombs]}} className='relative z-10 items-center leading-[1] justify-center font-bold font-rowdies'>{ noOfBombs > 0 && noOfBombs }</div> :
				boxProps.isFlagged ? <Flag size={newSize} /> : boxProps.isGuessed ? <Guess size={newSize} /> : <div style={{width: newSize+'px', height: newSize+'px'}} />
			}
    </button>
  )
}

Box.propTypes = {
	bomb: PropTypes.bool
}