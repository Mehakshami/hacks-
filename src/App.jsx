// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ReviewForm from "./components/ReviewForm";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import HijabDetail from "./pages/HijabDetail";
import StyleDetail from "./pages/StyleDetail";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/hijab/:id" element={<HijabDetail />} />
        <Route path="/style/:id" element={<StyleDetail />} />
        <Route path="/review" element={<ReviewForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

