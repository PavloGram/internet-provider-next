import React from "react";

function ClockIcon({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 100 100"
      enableBackground="new 0 0 100 100"
      xmlSpace="preserve"
      fill="white"
    >
      <path d="M53.5,46.7V25.6c0-2-1.6-3.5-3.5-3.5c-2,0-3.5,1.6-3.5,3.5v29.6c0.1,2,1.6,3.6,3.5,3.6c0.8,0,1.7-0.4,2.4-1.1L67.2,43  c1.4-1.4,1.4-3.7,0-5c-1.4-1.4-3.7-1.4-5,0L53.5,46.7z M50,5C25.2,5,5,25.2,5,50c0,24.8,20.2,45,45,45c24.8,0,45-20.2,45-45  C95,25.2,74.8,5,50,5L50,5z M50,85.5c-19.5,0-35.5-16-35.5-35.5c0-19.5,16-35.6,35.5-35.6c19.5,0,35.6,16,35.6,35.6  C85.6,69.5,69.5,85.5,50,85.5z" />
    </svg>

  );
}

export default ClockIcon;
