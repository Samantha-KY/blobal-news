import React from "react"
import { useNavigate } from "react-router-dom"

const NewsPublisherCard = ({ publisher }) => {
  const { name, description, id } = publisher
  const navigate = useNavigate()
  // const { data, isLoading, isError, error } =
  //   useGetPublisherNewsQuery(id)

  // useEffect(() => {
  //   console.log({ data, isLoading, isError, error })
  // }, [data, isLoading, isError, error])

  return (
    <div
      className="py-2 cursor-pointer"
      onClick={() => navigate(`news/${id}`)}
    >
      <h2 className="font-bold">{name}</h2>
      <p className="text-sm font-light">{description}</p>
    </div>
  )
}

export default NewsPublisherCard

// ;("Required parameters are missing, the scope of your search is too broad. Please set any of the following required parameters and try again: q, qInTitle, sources, domains.")
