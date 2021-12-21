import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home/home'
import Cadastro from './pages/Cadastro/cadastro'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  );
}
export default App;