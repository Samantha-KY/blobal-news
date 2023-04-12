import { nanoid } from "nanoid"
import React from "react"
import NewsTypeListItem from "./NewsTypeListItem"

const SlideDownHeaderMenu = ({
  onSelectAddtionalHeaderMenu,
  headerMenu,
  additionalHeaderMenu,
  isAdditionalMenusOpened,
  currentNewsCategory,
  setCurrentNewsCategory,
  setIsAdditionalMenusOpened,
}) => {
  return (
    <div
      className={`absolute top-24 -z-10 left-0 transition-all duration-500 ease-out right-0 w-full bg-white shadow-lg px-5 rounded-b-xl ${
        isAdditionalMenusOpened
          ? "translate-y-0"
          : "-translate-y-[50rem]"
      }`}
    >
      <div className="hidden md:grid grid-cols-1 divide-y">
        {additionalHeaderMenu.map((menu) => (
          <NewsTypeListItem
            onClick={() => onSelectAddtionalHeaderMenu(menu)}
            key={nanoid()}
          >
            <span className="py-5">{menu}</span>
          </NewsTypeListItem>
        ))}
      </div>
      <div className="grid md:hidden grid-cols-1 divide-y">
        {headerMenu.concat(additionalHeaderMenu).map((menu) => (
          <NewsTypeListItem
            activeCategory={currentNewsCategory}
            onClick={() => {
              setCurrentNewsCategory(menu)
              setIsAdditionalMenusOpened(false)
            }}
            key={nanoid()}
          >
            <span className="py-5">{menu}</span>
          </NewsTypeListItem>
        ))}
      </div>
    </div>
  )
}

export default SlideDownHeaderMenu
