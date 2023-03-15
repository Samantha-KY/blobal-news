// import { useEffect } from "react"
import { useParams } from "react-router-dom"

// import { useGetPublisherNewsQuery } from "./features/newsApi"

import { nanoid } from "nanoid"
import NewsCard from "./components/NewsCard"

const PublisherNews = () => {
  const { source } = useParams()

  // Temporary commented
  //   const { data, isLoading, isError, error } =
  //     useGetPublisherNewsQuery(source)

  return (
    <div className="px-5 xl:px-0">
      <h1 className="text-3xl md:text-4xl sticky top-24 bg-white border-b  py-5">
        News from {""}
        <span className="text-blue-500 font-bold">{source}</span>
      </h1>
      <div className="grid xl:grid-cols-4 gap-5 mt-5 md:grid-cols-3">
        {Array.from(Array(30).keys()).map(() => (
          <NewsCard
            key={nanoid()}
            news={{
              title: "News title",
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit quia a eligendi quo nisi cumque delectus maxime porro temporibus?",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default PublisherNews
