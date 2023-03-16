import { useParams } from "react-router-dom"
import { useGetPublisherNewsQuery } from "./features/newsApi"
import { nanoid } from "nanoid"
import NewsCard from "./components/NewsCard"
import PageLayout from "./layout/PageLayout"
import { useSelector } from "react-redux"

const PublisherNews = () => {
  const data = useSelector((state) => state.publisherNews.value)
  const { source } = useParams()

  const { isLoading, isError } = useGetPublisherNewsQuery(source)

  if (!isLoading && !isError)
    return (
      <PageLayout>
        <div className="px-5 xl:px-0">
          <h1 className="text-3xl md:text-4xl sticky top-24 bg-white border-b  py-5">
            News from {""}
            <span className="text-blue-500 font-bold">{source}</span>
          </h1>
          <div className="grid xl:grid-cols-4 gap-5 mt-5 md:grid-cols-3">
            {data.map((news) => (
              <NewsCard key={nanoid()} news={news} />
            ))}
          </div>
        </div>
      </PageLayout>
    )
}

export default PublisherNews
