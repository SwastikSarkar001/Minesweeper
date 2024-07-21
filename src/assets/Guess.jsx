import React from "react";
import PropTypes from "prop-types";

export default function Guess({ size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ size-10 }
      height={ size-10 }
      fill="#080"
      stroke="#080"
      viewBox="-39.34 0 230.34 230.34"
      className="relative z-10 m-[5px]"
    >
      <g>
        <g data-name="Layer 2">
          <g data-name="Layer 1">
            <path
              d="M92.17 118.09c-.87 3-2 5.42-2.19 7.88-.73 9.66-2.85 19.27-1 29.06.62 3.32-.43 4.7-3.49 6a19.65 19.65 0 01-4.08 1.26 62.72 62.72 0 01-28.93-.9 46.2 46.2 0 01-7.8-3.54c-3.16-1.56-4.35-4.18-4.37-7.7 0-13.46-.53-26.91-.26-40.36.13-6.54 1.4-13.07 2.45-19.56a31.16 31.16 0 015.5-12.6c4.15-1.38 8.45-.92 12.7-.86a83.38 83.38 0 0023.79-3c3.65-1 6.89-2.76 9-6.16a9.27 9.27 0 00.49-9.74C89.2 48.57 82 44.93 72 47.79c-14.47 4.13-25.56 12.5-31.67 26.72-2.92 6.8-5 7.77-11.79 5.93a16.71 16.71 0 01-4.79-1.84c-7.18-4.7-14.32-9.46-21.36-14.37C.1 62.64-.4 60.33.28 57.41a34.36 34.36 0 016.2-13.08A152.75 152.75 0 0141.1 11.24C48.57 6 57.21 4 65.89 2.08 76.63-.3 87.27-.87 98.22 1.6A52.15 52.15 0 01126 17.54c4.64 5.06 9 10.39 13.23 15.81a59.23 59.23 0 0111.09 24.82c4.65 22.12-3.36 39.08-20.11 53-6.1 5.06-13.15 6.7-20.74 6.89-5.41.14-10.84.03-17.3.03zm-12.63 35.2c.24-1.8.58-3.73.74-5.68.5-6 .79-12 1.45-18 .56-5.12 1.56-10.19 2.28-15.29.43-3 2.27-4.54 5-5a25.09 25.09 0 015.11-.44c5.16.12 10.31.29 15.45.6a19.35 19.35 0 0010-1.67c10.44-5.26 18.35-13 21.34-24.48 2.56-9.8 2.67-19.8-1.26-29.54a59.65 59.65 0 00-8.88-15.6c-3.81-4.66-7.39-9.52-11.42-14-6.26-6.9-13.68-12.07-23-14.34-16.77-4.14-32.79-1.37-48.26 5.95a31 31 0 00-4.32 2.8c-11.58 8.14-21.39 18.15-30.28 29.06-2.29 2.81-4.82 5.72-4.93 9.64a68.21 68.21 0 0023.71 15.91l4.27-7.15c3.4-5.68 7-11.24 12.52-15.09 8.08-5.64 17-9.86 26.67-11.32 13.48-2 23.84 4.81 27.91 19.59a14.25 14.25 0 01-.76 9.28c-2.54 6.14-6.63 10.48-13.17 12.57a68.91 68.91 0 01-21.95 3.45c-4.51 0-9.07-.48-13.29.43-3.58 5-4 10.56-4.28 16-.72 13.39-1.19 26.79-1.67 40.19a56.2 56.2 0 00.48 6.34c10.45 7.4 18.7 8.95 30.54 5.79zM65 230.31a27.48 27.48 0 01-26.76-17.82 20.66 20.66 0 01-1.56-10.07c1.21-9.33 4.72-17.43 11.77-24.13 6.5-6.19 13.47-7.72 22-5.49 5.61 1.47 11.06 2.83 15.42 6.95 6.45 6.08 9.93 13.2 8.3 22.27-.25 1.41-.38 2.84-.62 4.25-2.65 15.6-12.71 24.06-28.55 24.04zm1.79-8.31a38.22 38.22 0 005.94-1.33c7.75-2.77 14.61-13.85 13.67-21.93a16.51 16.51 0 00-1.31-4c-4-10.17-12.6-13.4-22.46-14.34a9 9 0 00-5.63 1.42c-6 4.3-10.38 10.17-11.58 17.39-1.98 11.96 7.72 23.05 21.37 22.79z"
            />
            <path
              d="M79.54 153.29C67.7 156.45 59.45 154.9 49 147.5a56.2 56.2 0 01-.43-6.38c.48-13.4.95-26.8 1.67-40.19.3-5.4.7-10.91 4.28-16 4.22-.91 8.78-.45 13.29-.43a68.91 68.91 0 0021.95-3.45c6.54-2.14 10.63-6.43 13.17-12.57a14.25 14.25 0 00.76-9.28c-4.12-14.74-14.48-21.59-27.96-19.55C66 41.11 57.14 45.33 49.06 51c-5.53 3.85-9.12 9.41-12.52 15.09l-4.27 7.15A68.21 68.21 0 018.56 57.3c.11-3.92 2.64-6.83 4.93-9.64 8.89-10.91 18.7-20.92 30.28-29.06a31 31 0 014.32-2.8C63.56 8.48 79.58 5.71 96.5 9.87c9.27 2.27 16.69 7.44 23 14.34 4 4.44 7.61 9.3 11.42 14a59.65 59.65 0 018.88 15.6c3.93 9.74 3.82 19.74 1.26 29.54-3 11.45-10.9 19.22-21.34 24.48a19.35 19.35 0 01-10 1.67c-5.14-.31-10.29-.48-15.45-.6a25.09 25.09 0 00-5.11.44c-2.78.5-4.62 2-5 5-.72 5.1-1.72 10.17-2.28 15.29-.66 6-1 12-1.45 18-.31 1.93-.65 3.86-.89 5.66zM66.79 222c-13.65.28-23.35-10.81-21.37-22.77C46.62 192 51 186.12 57 181.82a9 9 0 015.63-1.47c9.86.94 18.43 4.17 22.46 14.34a16.51 16.51 0 011.31 4c.94 8.08-5.92 19.16-13.67 21.93a38.22 38.22 0 01-5.94 1.38z"
              fill='#0d0'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

Guess.propTypes = {
	size: PropTypes.number.isRequired,
}