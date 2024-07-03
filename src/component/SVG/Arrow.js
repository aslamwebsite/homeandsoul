import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    viewBox="0 0 100 125"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeMiterlimit={10}
      d="M95 50H5m7.07-7.07L5 50l7.071 7.07"
    />
  </svg>
)
export default SvgComponent
