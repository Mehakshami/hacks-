import { Link } from "react-router-dom";
import React from "react";
export default function Navbar({ user, setUser }) {
  return (
    <nav className="flex justify-between p-4 bg-pink-200">
      <h1 className="font-bold text-xl">🧕 Hijab Styles</h1>
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        {user ? (
          <>
            <span>{user.username}</span>
            <button onClick={() => {setUser(null); localStorage.removeItem("user")}} className="text-red-600">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
}
