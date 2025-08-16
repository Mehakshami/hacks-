// src/pages/HijabDetail.jsx
import { useParams } from "react-router-dom";
import { hijabStyles } from "../data";
import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import React from "react";

export default function HijabDetail({ user }) {
  const { id } = useParams();
  const style = hijabStyles.find(s => s.id === parseInt(id));
  const [reviews, setReviews] = useState(style.reviews);

  const addReview = (review) => {
    setReviews([...reviews, review]);
    style.reviews.push(review); // update original data
  };

  // Calculate average rating
  const avgRating =
    reviews.length > 0
      ? (reviews.reduce((sum,r)=>sum+r.rating,0)/reviews.length).toFixed(1)
      : "No ratings yet";

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <img src={style.image} alt={style.name} className="rounded-lg mb-3 w-full h-80 object-cover"/>
      <h1 className="font-bold text-2xl mb-1">{style.name}</h1>
      <p className="text-gray-600 mb-2">{style.description}</p>
      <p className="text-yellow-600 font-semibold mb-4">⭐ {avgRating}</p>

      <h2 className="font-bold text-lg mb-2">Reviews</h2>
      {reviews.length === 0 ? <p>No reviews yet.</p> : (
        reviews.map((r,i)=>(
          <div key={i} className="border-b py-2">
            <strong>{r.user}</strong> ⭐ {r.rating}
            <p>{r.comment}</p>
            {r.image && <img src={r.image} alt="review" className="w-40 mt-1 rounded"/>}
          </div>
        ))
      )}

      {user ? <ReviewForm addReview={addReview} user={user}/> : <p className="text-red-500">Login to add review.</p>}
    </div>
  );
}
