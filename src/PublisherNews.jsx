import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useGetPublisherNewsQuery } from "./features/newsApi"

const PublisherNews = () => {
  const { source } = useParams()

  const { data, isLoading, isError, error } =
    useGetPublisherNewsQuery(source)

  return (
    <div>
      <h1>News</h1>
      <div></div>
    </div>
  )
}

export default PublisherNews
