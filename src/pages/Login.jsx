import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export default function Login({ setUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login attempt:", { username, password }); // <-- add this

    const savedUser = JSON.parse(localStorage.getItem("user"));
    if(savedUser && savedUser.username === username && savedUser.password === password){
      setUser(savedUser);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin} className="p-6 max-w-sm mx-auto">
      <h2 className="font-bold text-xl mb-4">Login</h2>
      <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="Username" className="border w-full p-2 mb-2"/>
      <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" className="border w-full p-2 mb-2"/>
      <button className="bg-pink-500 text-white px-4 py-2 rounded">Login</button>
    </form>
  );
}
