import { useDispatch } from "react-redux"
import { setNewsToRead } from "../features/news"
import PropTypes from "prop-types"

const NewsCard = ({ isLastCard, news }) => {
  const dispatch = useDispatch()
  const { urlToImage, description, title } = news

  const onRedirectToReadNews = () => {
    dispatch(setNewsToRead(news))
    window.location.href = news.url
  }

  return (
    <div
      onClick={onRedirectToReadNews}
      className={`flex cursor-pointer flex-col mt-5 break-inside-avoid ${
        isLastCard && "col-span-full"
      }`}
    >
      <img
        src={urlToImage || "./mock-image.jpg"}
        alt={title}
        className="object-cover rounded-lg h-80 w-full"
      />
      <div className="h-fit text-black mt-5">
        <h1 className="text-base font-semibold">{title}</h1>
        <div className="mt-2 font-light overflow-hidden max-h-20 line-clamp-2">
          {description}
        </div>
      </div>
    </div>
  )
}

NewsCard.propType = {
  isLastCard: PropTypes.bool.isRequired,
  news: PropTypes.object,
}

export default NewsCard
