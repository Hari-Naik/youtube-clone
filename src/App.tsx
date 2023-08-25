import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import "./App.css";
import Home from "./Pages/Home/Home";
import VideoDetails from "./Pages/VideoDetails/VideoDetails";
import SearchPage from "./Pages/SearchPage/SearchPage";
import NotFound from "./Pages/NotFound/NotFound";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/watch/:id" element={<VideoDetails />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/trending" element={<Home />} />
        <Route path="/music" element={<Home />} />
        <Route path="/films" element={<Home />} />
        <Route path="/live" element={<Home />} />
        <Route path="/gaming" element={<Home />} />
        <Route path="/news" element={<Home />} />
        <Route path="/sports" element={<Home />} />
        <Route path="/learning" element={<Home />} />
        <Route path="/fashion & beauty" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
