import NewsPublisherCard from "./NewsPublisherCard"
import { useGetPublishersQuery } from "../features/newsApi"
import { nanoid } from "nanoid"

const Publishers = () => {
  const {
    data: publishers,
    isLoading,
    isError,
  } = useGetPublishersQuery()

  if (!isLoading && !isError)
    return (
      <div className="xl:col-span-1 w-full h-screen overflow-y-scroll px-5 xl:px-0 text-black pb-10 scroll-bar">
        <h2 className="font-bold text-2xl pb-5 pt-10 sticky top-0 bg-white">
          Publishers
        </h2>
        <div className="grid grid-cols-1 divide-y divide-solid">
          {publishers.map(
            (publisher, index) =>
              index < 100 && (
                <NewsPublisherCard
                  key={nanoid()}
                  publisher={publisher}
                />
              )
          )}
        </div>
      </div>
    )
}

export default Publishers
