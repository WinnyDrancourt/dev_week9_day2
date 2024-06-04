import React from "react";
import { createRoot } from "react-dom/client";
import "./style/main.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./components/general/routes";
import Navbar from "./components/general/navbar";

const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Navbar />
      </header>
      <main>
        <AppRoutes />
      </main>
      <footer></footer>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
