const NewsType = ({ children, onClick, activeCategory }) => {
  return (
    <li
      onClick={onClick}
      className="cursor-pointer flex items-center w-full"
    >
      {children}
      <span
        className={`text-black ${
          activeCategory === children ? "block" : "hidden"
        }`}
      ></span>
    </li>
  )
}

export default NewsType
