import React from "react"
import { RiSearchLine } from "react-icons/ri"

const SearchBar = () => {
  return (
    <form className="flex gap-2 items-center">
      <div className="bg-gray-200 p-1 shadow rounded-full">
        <div className="bg-white rounded-full flex items-center">
          <input
            type="text"
            className="transition-width max-w-[40rem] w-[30rem] py-2 px-5 font-light outline-none rounded-3xl"
            placeholder="Search..."
          />

          <button className="rounded-full bg-blue-500 p-2 text-white m-1 cursor-pointer hover:shadow-md transition-all">
            <RiSearchLine className="h-6 w-6" />
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBar
