import { RiMenu3Line, RiSearchLine } from "react-icons/ri"
import { BsThreeDots } from "react-icons/bs"
import { RxCross2 } from "react-icons/rx"
import { nanoid } from "nanoid"
import { useEffect, useState } from "react"
import { useGetLatestNewsByCategoryQuery } from "../features/newsApi"
import { useDispatch } from "react-redux"
import { setLatestNews } from "../features/news"
import NewsTypeListItem from "./NewsTypeListItem"

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
    <div className="sticky top-0 z-50">
      <div className="w-full px-5 xl:px-0 flex gap-10 justify-between py-7 font-medium items-center bg-white backdrop-blur-md">
        <div className="font-extrabold text-4xl xl:text-5xl bg-white">
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
            onClick={() =>
              setIsAdditionalMenusOpened((prev) => !prev)
            }
          >
            <BsThreeDots />
          </li>
        </ul>
        <div className="flex items-center gap-5">
          <RiSearchLine className="h-6 w-6" />
          <button
            onClick={() =>
              setIsAdditionalMenusOpened((prev) => !prev)
            }
          >
            {isAdditionalMenusOpened ? (
              <RxCross2 className="h-6 w-6 xl:hidden block" />
            ) : (
              <RiMenu3Line className="h-6 w-6 xl:hidden block" />
            )}
          </button>
        </div>
      </div>
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
    </div>
  )
}
export default Header
