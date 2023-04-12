import { BsThreeDots } from "react-icons/bs"
import { nanoid } from "nanoid"
import { useState } from "react"
import { useGetLatestNewsByCategoryQuery } from "../features/newsApi"
import NewsTypeListItem from "./NewsListItem"
import SlideDownHeaderMenu from "./MenuHeaderSlide"
import MobileMenuButton from "./MobileMenuButton"
import { matchPath, useLocation } from "react-router-dom"
import SearchBar from "./SearchBar"
import { useDispatch } from "react-redux"
import { setLatestNews } from "../features/news"

const headerMenu = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
]
const additionalHeaderMenu = ["sports", "technology"]

const Header = () => {
  const [currentNewsCategory, setCurrentNewsCategory] =
    useState("general")
  const [isAdditionalMenusOpened, setIsAdditionalMenusOpened] =
    useState(false)
  const [isSeachInputOpened, setIsSearchInputOpened] = useState(false)
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const isRootPath = matchPath("/", pathname)

  useGetLatestNewsByCategoryQuery(currentNewsCategory)

  const onSelectAddtionalHeaderMenu = (menu) => {
    const removedFromHeaderMenu = headerMenu.pop()
    const menuIndexToBeRemoved = additionalHeaderMenu.indexOf(menu)

    if (menuIndexToBeRemoved !== -1)
      additionalHeaderMenu.splice(menuIndexToBeRemoved, 1)

    headerMenu.push(menu)
    additionalHeaderMenu.push(removedFromHeaderMenu)
    setIsAdditionalMenusOpened(false)
    setCurrentNewsCategory(menu)
  }

  return (
    <div className="w-[1360px] fixed top-0 z-50">
      <div className="w-full px-5 xl:px-0 flex gap-10 py-7 font-medium items-center bg-white backdrop-blur-md">
        <div className="font-extrabold text-4xl xl:text-5xl bg-white w-full">
          <a href="/">RNA</a>
        </div>
        {isRootPath && !isSeachInputOpened ? (
          <ul className="xl:flex gap-20 text-xl hidden items-center">
            {headerMenu.map((menu) => (
              <NewsTypeListItem
                key={nanoid()}
                activeCategory={currentNewsCategory}
                onClick={() => {
                  dispatch(setLatestNews([]))
                  setCurrentNewsCategory(menu.toLocaleLowerCase())
                }}
              >
                {menu}
              </NewsTypeListItem>
            ))}
            <li
              className="cursor-pointer"
              onClick={() =>
                setIsAdditionalMenusOpened((prev) => !prev)
              }
            >
              <BsThreeDots />
            </li>
          </ul>
        ) : null}
        <div className="flex items-center gap-2">
          <SearchBar
            setIsSearchInputOpened={setIsSearchInputOpened}
            isSeachInputOpened={isSeachInputOpened}
          />
          <MobileMenuButton
            isAdditionalMenusOpened={isAdditionalMenusOpened}
            setIsAdditionalMenusOpened={setIsAdditionalMenusOpened}
          />
        </div>
      </div>
      <SlideDownHeaderMenu
        onSelectAddtionalHeaderMenu={onSelectAddtionalHeaderMenu}
        headerMenu={headerMenu}
        additionalHeaderMenu={additionalHeaderMenu}
        isAdditionalMenusOpened={isAdditionalMenusOpened}
        currentNewsCategory={currentNewsCategory}
        setCurrentNewsCategory={setCurrentNewsCategory}
        setIsAdditionalMenusOpened={setIsAdditionalMenusOpened}
      />
    </div>
  )
}
export default Header
