import { useNavigate } from "react-router-dom"

const NewsPublisherCard = ({ publisher }) => {
  const { name, description, id } = publisher
  const navigate = useNavigate()

  return (
    <div
      className="py-2 cursor-pointer hover:bg-gray-100"
      onClick={() => navigate(`news/${id}`)}
    >
      <h2 className="font-bold">{name}</h2>
      <p className="text-sm font-light">{description}</p>
    </div>
  )
}

export default NewsPublisherCard
