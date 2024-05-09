import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DetailMovie from "./pages/DetailMovie";
import Favorites from "./pages/favorites";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/movie/:id" element={<DetailMovie />} />
        <Route path="/favorite" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
