import { useState } from "react"
import { useDispatch } from "react-redux"
import { useLocation, matchPath, useParams } from "react-router-dom"
import { setLatestNews, setPublisherNews } from "../features/news"
import { endpoints } from "../features/newsApi"
import { CrossIcon, SearchIcon } from "../vectors"

const SearchBar = ({
  isSeachInputOpened,
  setIsSearchInputOpened,
}) => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()
  const { pathname } = useLocation()
  const isRootPath = matchPath("/", pathname)
  const { source } = useParams()

  const onSearch = async () => {
    if (searchValue !== "") {
      if (isRootPath) {
        const result = await dispatch(
          endpoints.getNewsBySearchQuery.initiate(searchValue)
        )
        dispatch(setLatestNews(result.data.articles))
      } else {
        const result = await dispatch(
          endpoints.getNewsBySearchQueryAndSource.initiate({
            query: searchValue,
            source,
          })
        )
        dispatch(setPublisherNews(result.data.articles))
      }
      setIsSearchInputOpened(true)
      setSearchValue("")
    }
    setIsSearchInputOpened(true)
  }

  return (
    <div className="flex gap-2 items-center">
      <div className="p-1 shadow rounded-full">
        <div className="bg-white rounded-full flex items-center w-fit">
          <input
            onKeyUp={(e) => (e.key === "Enter" ? onSearch() : null)}
            onChange={(e) => setSearchValue(e.target.value)}
            type="text"
            value={searchValue}
            className={`transition-width duration-500 ease-out max-w-[40rem] font-light outline-none rounded-3xl ${
              isSeachInputOpened
                ? "w-full md:w-[30rem] py-2 px-5"
                : "w-0"
            }`}
            placeholder="Search..."
          />
          <div className="rounded-full bg-black text-white m-1 cursor-pointer hover:shadow-md transition-all font-bold">
            {searchValue !== "" || !isSeachInputOpened ? (
              <button className="p-2" onClick={onSearch}>
                <SearchIcon className="h-6 w-6" />
              </button>
            ) : (
              <button
                className="p-2"
                onClick={() =>
                  setIsSearchInputOpened((prev) => !prev)
                }
              >
                <CrossIcon className="h-6 w-6" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
