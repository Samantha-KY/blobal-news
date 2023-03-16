import React from "react"
import { ThreeDotIcon } from "../vectors"

const NewsType = ({ children, onClick, activeCategory }) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer flex items-center w-full"
    >
      {children}
      <span
        className={`text-blue-500 ${
          activeCategory === children ? "block" : "hidden"
        }`}
      >
        <ThreeDotIcon />
      </span>
    </li>
  )
}

export default NewsType
