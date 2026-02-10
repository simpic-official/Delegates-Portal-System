import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import data from "./data/delegates.json";
import Home from "./pages/Home.jsx";
import DelegatePage from "./pages/DelegatePage.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  const basePath = data.basePath || "/d";

  return (
    <Routes>
      <Route path="/" element={<Home basePath={basePath} />} />
      <Route path={`${basePath}/:id`} element={<DelegatePage basePath={basePath} />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
}
