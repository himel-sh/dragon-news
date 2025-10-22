import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
  return (
    <div className="space-y-5">
      <img
        className="w-full h-[350px] object-cover"
        src={news.image_url}
        alt=""
      />
      <h2 className="font-bold text-xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`}>
        <button className="btn btn-secondary">All news in this category</button>
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
