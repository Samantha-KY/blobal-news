import React from "react";

const NewsPublisherCard = ({ name, company }) => {
  return (
    <div className="py-2">
      <h2 className="font-light">{name}</h2>
      <p className="text-sm font-bold">from {company}</p>
    </div>
  );
};

export default NewsPublisherCard;
