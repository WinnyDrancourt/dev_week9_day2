import { Routes, Route } from "react-router-dom";
import Home from "../home/home";
import Login from "../auth/login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
