import { RiMenu3Line, RiSearchLine } from "react-icons/ri"
import { BsThreeDots } from "react-icons/bs"
import NewsTypeListItem from "./NewsTypeListItem"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useGetLatestNewsByCategoryQuery } from "../features/newsApi"
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
  const dispatch = useDispatch()

  const {
    isError,
    isLoading,
    data: news,
  } = useGetLatestNewsByCategoryQuery(currentNewsCategory)

  useEffect(() => {
    if (!isLoading && !isError) dispatch(setLatestNews(news))
  }, [currentNewsCategory, dispatch, isError, isLoading, news])

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
    <div className="w-full px-5 xl:px-0 flex gap-10 justify-between py-7 font-medium items-center sticky top-0 z-50 bg-white backdrop-blur-md">
      <div className="font-extrabold text-4xl xl:text-5xl">
        NGlobal
      </div>
      <ul className="xl:flex gap-20 text-xl hidden items-center">
        {headerMenu.map((menu) => (
          <NewsTypeListItem
            key={nanoid()}
            activeCategory={currentNewsCategory}
            onClick={() =>
              setCurrentNewsCategory(menu.toLocaleLowerCase())
            }
          >
            {menu}
          </NewsTypeListItem>
        ))}
        <li
          className="cursor-pointer"
          onClick={() => setIsAdditionalMenusOpened((prev) => !prev)}
        >
          <BsThreeDots />
        </li>
      </ul>
      <div className="flex items-center gap-5">
        <RiSearchLine className="h-6 w-6" />
        <RiMenu3Line className="h-6 w-6 xl:hidden block" />
      </div>
      <ul
        className={`absolute top-20 left-0 -z-20 transition-all duration-500 right-0 w-full grid grid-cols-1 bg-white divide-y shadow-lg px-5 rounded-b-xl ${
          isAdditionalMenusOpened
            ? "translate-y-0"
            : "-translate-y-[1000px]"
        }`}
      >
        {additionalHeaderMenu.map((menu) => (
          <NewsTypeListItem
            onClick={() => onSelectAddtionalHeaderMenu(menu)}
            key={nanoid()}
          >
            <span className="py-5">{menu}</span>
          </NewsTypeListItem>
        ))}
      </ul>
    </div>
  )
}
export default Header
