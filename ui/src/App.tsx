import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Buscar from "./pages/Buscar";
import Biblioteca from "./pages/Biblioteca";
import Login from "./pages/Login";
import DetalhesMusica from "./pages/DetalhesMusica";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/buscar" element={<Buscar />} />

        <Route path="/biblioteca" element={<Biblioteca />} />

        <Route path="/login" element={<Login />} />

        <Route path="/musica/:id" element={<DetalhesMusica />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App;