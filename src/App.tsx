import "./App.css";
import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { Nav } from "./components/Nav/Nav";

export const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<Home />} />
      </Routes>
    </>
  );
};
