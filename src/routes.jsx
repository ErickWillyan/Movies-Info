import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import DetailMovie from "./pages/DetailMovie";

import Header from "./components/Header";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/filme/:id" element={<DetailMovie />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
