import NewsCard from "./components/NewsCard";
import NewsPublisherCard from "./components/NewsPublisherCard";

const Home = () => {
  return (
    <div className="flex flex-col xl:grid xl:grid-cols-3 gap-10">
      <div className="mt-5 xl:mt-10 relative col-span-3 h-fit xl:h-full">
        <img
          src="./mock-image.jpg"
          alt="last"
          className="max-w-full w-full h-80 xl:h-full object-cover"
        />
        <div className="absolute bottom-0 text-white p-5 xl:p-10 bg-gradient-to-t from-black">
          <h1 className="text-xl xl:text-5xl md:line-clamp-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
            quis.
          </h1>
          <div className="mt-10 text-sm line-clamp-4 xl:text-2xl md:line-clamp-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            quisquam delectus, id inventore nisi voluptates itaque architecto
            tempora molestiae nulla vel reprehenderit? Facere, magni vel
            consequuntur aliquid labore dolorum illo hic voluptates iure laborum
            ipsa laboriosam consectetur explicabo, quaerat ex tempora aspernatur
            nobis vitae assumenda ab in nihil excepturi accusantium!
          </div>
        </div>
      </div>

      <div className="xl:col-span-2 pt-5 xl:pt-10 px-5 xl:px-0">
        <h2 className="font-bold text-2xl">Latest news</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {Array.from(Array(9).keys()).map((_, index) => (
            <NewsCard key={`latest-news-${index}`} isLastCard={index === 8} />
          ))}
        </div>
      </div>

      <div className="xl:col-span-1 w-full h-fit sticky px-5 xl:px-0 top-20 text-black py-10">
        <h2 className="font-bold text-2xl pb-5">Publishers</h2>
        <div className="grid grid-cols-1 divide-y divide-solid">
          {Array.from(Array(10).keys()).map((_, index) => (
            <NewsPublisherCard
              key={`publisher-${index}`}
              name="Jonathan Zihindula"
              company="CNN"
            />
          ))}
        </div>
        <button className="bg-white text-center w-full text-black py-3 rounded-lg mt-5 font-bold hover:text-xl transition-all">
          Load more
        </button>
      </div>
    </div>
  );
};

export default Home;
