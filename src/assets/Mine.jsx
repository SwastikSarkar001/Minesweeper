import React from "react";
import PropTypes from "prop-types";

export default function Mine({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ size }
      height={ size }
      viewBox="0 0 48 48"
      className="relative z-10"
    >
    <circle cx="24.01" cy="24" r="15.73" fill='#000' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.24 22.65a2.2 2.2 0 112.19-2.19 2.19 2.19 0 01-2.19 2.19zM21 18.89a3 3 0 113-3 3 3 0 01-3 3z"
        fill='#fff'
        stroke='#000'
        strokeMiterlimit={10}
      />
      <path d="M24 2.5L24 8.27" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45.51 23.98L39.75 23.98" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24.03 45.5L24.03 39.73" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M2.51 24.02L8.28 24.02" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35.14 12.88L37.18 10.84" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M35.14 35.12L37.18 37.16" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.89 35.12L10.85 37.16" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.89 12.88L10.85 10.84" fill='none' stroke='#000' strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

Mine.propTypes = {
    size: PropTypes.number.isRequired
}