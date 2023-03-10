import React from "react";

const NewsCard = ({ isLastCard }) => {
  return (
    <div
      className={`flex flex-col mt-5 break-inside-avoid ${
        isLastCard && "col-span-full"
      }`}
    >
      <div className="relative w-fit h-fit">
        <img
          src="./mock-image.jpg"
          alt="last"
          className="object-cover rounded-lg"
        />
      </div>
      <div className="h-fit text-black mt-5">
        <h1 className="text-base font-semibold">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          quis.
        </h1>
        <div className="mt-2 font-light overflow-hidden max-h-20 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quisquam
          delectus, id inventore nisi voluptates itaque architecto tempora
          molestiae nulla vel reprehenderit? Facere,
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
