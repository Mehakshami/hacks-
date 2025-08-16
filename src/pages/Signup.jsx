import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Signup({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    console.log("Signup attempt:", { username, password }); // <-- add this
    if (!username || !password) return alert("Fill all fields");

    const newUser = { username, password };
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    navigate("/");
  };

  return (
    <form onSubmit={handleSignup} className="p-6 max-w-sm mx-auto">
      <h2 className="font-bold text-xl mb-4">Signup</h2>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        className="border w-full p-2 mb-2"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="border w-full p-2 mb-2"
      />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Signup</button>
    </form>
  );
}
