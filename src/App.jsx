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
      {/* Cabeçalho fixo */}
      <Header />

      {/* Conteúdo principal com todas as seções na mesma página */}
      <div className="flex-1 pt-16">
        <Home />
        <Solucao />
        <Metodo />
        <QuemSomos />
        <Contato />
        <Privacidade />
      </div>

      {/* Rodapé */}
      <Footer />
    </div>
  );
}
