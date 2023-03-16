import NewsCard from "./components/NewsCard"
import { useSelector } from "react-redux"
import Publishers from "./components/Publishers"
import PageLayout from "./layout/PageLayout"

const Home = () => {
  const latestNews = useSelector((state) => state.latestNews.value)

  if (latestNews.length)
    return (
      <PageLayout>
        <div className="flex flex-col xl:grid xl:grid-cols-3 gap-10">
          <div
            onClick={() => (window.location.href = latestNews[0].url)}
            className="mt-5 cursor-pointer xl:mt-10 relative col-span-3 h-fit md:h-[40rem] xl:h-[50rem]"
          >
            <img
              src={latestNews[0].urlToImage}
              alt="last"
              className="max-w-full w-full h-80 md:h-full xl:h-full object-cover"
            />
            <div className="absolute bottom-0 text-white p-5 xl:p-10 bg-gradient-to-t from-black">
              <h1 className="text-xl xl:text-5xl md:line-clamp-2">
                {latestNews[0].title}
              </h1>
              <div className="mt-10 text-sm line-clamp-4 xl:text-2xl md:line-clamp-4">
                {latestNews[0].description}
              </div>
            </div>
          </div>

          <div className="xl:col-span-2 pt-5 xl:pt-10 px-5 xl:px-0">
            <h2 className="font-bold text-2xl">Latest news</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {latestNews.map(
                (news, index) =>
                  index !== 0 && (
                    <NewsCard
                      key={`latest-news-${index}`}
                      news={news}
                      isLastCard={index === 9}
                    />
                  )
              )}
            </div>
          </div>
          <Publishers />
        </div>
      </PageLayout>
    )
}

export default Home
