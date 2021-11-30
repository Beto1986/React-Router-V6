import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Inicio from "./routes/Inicio";
import Blog from "./routes/Blog";
import Post from "./routes/Post";
import Contacto from "./routes/Contacto";
import NoEncontrada from "./routes/NoEncontrada";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Inicio />} />
        <Route path="Blog" element={<Blog />} />
        <Route path="Blog/:id" element={<Post />} />
        <Route path="Contacto" element={<Contacto />} />
        <Route path="*" element={<NoEncontrada />} />
      </Route>
    </Routes>
  </BrowserRouter>,

  document.getElementById("root")
);
