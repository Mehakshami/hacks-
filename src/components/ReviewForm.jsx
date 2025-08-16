// src/components/ReviewForm.jsx
import { useState } from "react";

export default function ReviewForm({ addReview, user }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(""); // optional image URL

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return alert("Please write a comment");

    addReview({
      user: user.username,
      rating: parseInt(rating),
      comment,
      image
    });

    setComment("");
    setRating(5);
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4 border-t pt-4">
      <h3 className="font-bold mb-2">Add your review</h3>

      {/* Rating */}
      <div className="mb-2">
        {[1,2,3,4,5].map(n => (
          <button
            type="button"
            key={n}
            className={`px-2 ${rating >= n ? "text-yellow-500" : "text-gray-400"}`}
            onClick={() => setRating(n)}
          >⭐</button>
        ))}
      </div>

      {/* Comment */}
      <textarea
        value={comment}
        onChange={(e)=>setComment(e.target.value)}
        placeholder="Write your review..."
        className="border w-full p-2 mb-2"
      />

      {/* Image URL */}
      <input
        type="text"
        value={image}
        onChange={(e)=>setImage(e.target.value)}
        placeholder="Image URL (optional)"
        className="border w-full p-2 mb-2"
      />

      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>
    </form>
  );
}
