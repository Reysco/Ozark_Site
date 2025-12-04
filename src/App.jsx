import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Solucao from "./pages/Solucao";
import Metodo from "./pages/Metodo";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import Privacidade from "./pages/Privacidade";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="flex-1 pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/metodo" element={<Metodo />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/privacidade" element={<Privacidade />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
