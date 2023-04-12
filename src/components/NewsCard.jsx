const NewsCard = ({ isLastCard, news }) => {
  const { urlToImage, description, title } = news

  return (
    <div
      onClick={() => (window.location.href = news.url)}
      className={`flex cursor-pointer flex-col mt-5 break-inside-avoid ${
        isLastCard && "col-span-full"
      }`}
    >
      <img
        src={urlToImage || "../mock-image.jpg"}
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

export default NewsCard
