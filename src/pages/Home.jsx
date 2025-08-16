// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { hijabStyles } from "../data";
import React from "react";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {hijabStyles.map(style => {
        const avgRating = style.reviews.length > 0
          ? (style.reviews.reduce((sum,r)=>sum+r.rating,0)/style.reviews.length).toFixed(1)
          : "No ratings yet";

        return (
          <div key={style.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <img src={style.image} alt={style.name} className="rounded-lg mb-3 w-full h-60 object-cover"/>
            <h2 className="font-bold text-lg">{style.name}</h2>
            <p className="text-gray-600 mb-2">{style.description}</p>
            <p className="text-yellow-600 font-semibold">⭐ {avgRating}</p>
            <p className="text-sm text-gray-500">{style.reviews.length} comments</p>
            <Link to={`/hijab/${style.id}`} className="inline-block mt-3 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">View Details</Link>
          </div>
        );
      })}
    </div>
  );
}
