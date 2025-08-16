import { useParams } from "react-router-dom";
import { hijabStyles } from "../data";
import { useState } from "react";
import ReviewForm from "../components/ReviewForm";
import React from "react";
export default function StyleDetail({ user }) {
  const { id } = useParams();
  const style = hijabStyles.find(s => s.id === parseInt(id));
  const [reviews, setReviews] = useState(style.reviews);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  return (
    <div className="p-6">
      <img src={style.image} alt={style.name} className="rounded-lg mb-3 w-80"/>
      <h1 className="font-bold text-2xl">{style.name}</h1>
      <p className="mb-4">{style.description}</p>

      <h2 className="font-bold text-lg mb-2">Reviews</h2>
      {reviews.length === 0 ? <p>No reviews yet.</p> : (
        reviews.map((r, i) => (
          <div key={i} className="border-b py-2">
            <strong>{r.user}</strong> ⭐ {r.rating}
            <p>{r.comment}</p>
          </div>
        ))
      )}

      {user ? <ReviewForm addReview={addReview} user={user}/> : <p className="text-red-500">Login to add review.</p>}
    </div>
  );
}
