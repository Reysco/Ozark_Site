import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logoOzark from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isActive = (path) =>
    location.pathname === path
      ? "text-yellow-300 underline underline-offset-4"
      : "text-white/80 hover:text-white";

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] shadow-md border-b border-slate-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        <Link to="/" className="flex items-center gap-3">
          <img src={logoOzark} alt="Logo" className="h-10 w-auto rounded-md shadow" />
          <span className="text-white text-lg font-bold tracking-tight">
            Ozark Consultoria
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={isActive("/")}>Início</Link>
          <Link to="/solucao" className={isActive("/solucao")}>Solução</Link>
          <Link to="/metodo" className={isActive("/metodo")}>Método</Link>
          <Link to="/quem-somos" className={isActive("/quem-somos")}>Quem Somos</Link>
          <Link to="/contato" className={isActive("/contato")}>Contato</Link>
          <Link to="/privacidade" className={isActive("/privacidade")}>Privacidade</Link>

          {/* BOTÃO MINIMALISTA LIGHT/DARK */}
          <button
            onClick={toggleTheme}
            className="ml-4 w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-white transition"
            title="Alterar tema"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>
        </nav>

      </div>
    </header>
  );
}
