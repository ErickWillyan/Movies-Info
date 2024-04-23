import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DetailMovie from "./pages/DetailMovie";
import Favorites from "./pages/favorites";

import Header from "./components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
