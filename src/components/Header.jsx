import { RiMenu3Line, RiSearchLine } from "react-icons/ri"
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
// const additionalHeaderMenu = ["sports", "technology"]

const Header = () => {
  const [currentNewsCategory, setCurrentNewCategory] =
    useState("general")
  const dispatch = useDispatch()

  const {
    error,
    isError,
    isLoading,
    data: news,
  } = useGetLatestNewsByCategoryQuery(currentNewsCategory)

  useEffect(() => {
    console.log({ currentNewsCategory, error, news })
    if (!isLoading && !isError) dispatch(setLatestNews(news))
  }, [currentNewsCategory, dispatch, error, isError, isLoading, news])

  return (
    <div className="w-full px-5 xl:px-0 flex gap-10 justify-between py-7 font-medium items-center sticky top-0 z-50 bg-white backdrop-blur-md">
      <div className="font-extrabold text-4xl xl:text-5xl">
        NGlobal
      </div>
      <ul className="xl:flex gap-20 text-xl hidden">
        {headerMenu.map((menu) => (
          <NewsTypeListItem
            key={nanoid()}
            activeCategory={currentNewsCategory}
            onClick={() =>
              setCurrentNewCategory(menu.toLocaleLowerCase())
            }
          >
            {menu}
          </NewsTypeListItem>
        ))}
      </ul>
      <div className="flex items-center gap-5">
        <RiSearchLine className="h-6 w-6" />
        <RiMenu3Line className="h-6 w-6 xl:hidden block" />
      </div>
    </div>
  )
}
export default Header
