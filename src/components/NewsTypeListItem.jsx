import React from "react"
import { RxDotFilled } from "react-icons/rx"

const NewsType = ({ children, onClick, activeCategory }) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer flex items-center"
    >
      {children}
      <span
        className={`text-blue-500 ${
          activeCategory === children ? "block" : "hidden"
        }`}
      >
        <RxDotFilled />
      </span>
    </li>
  )
}

export default NewsType
