import { useEffect, useState } from "react";
import { useTheme } from "../context/ThemeContext";
import logoOzark from "../assets/logo.png";

const navItems = [
  { id: "inicio", label: "Início" },
  { id: "solucao", label: "Solução" },
  { id: "metodo", label: "Método" },
  { id: "quem-somos", label: "Quem Somos" },
  { id: "contato", label: "Contato" },
  { id: "privacidade", label: "Privacidade" },
];

const sectionIds = navItems.map((item) => item.id);

function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return;

  const headerOffset = 80;
  const elementPosition = element.getBoundingClientRect().top + window.scrollY;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("inicio");

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY + 120;

      let newActive = "inicio";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          newActive = id;
          break;
        }
      }

      setActiveSection(newActive);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleClick(id) {
    setActiveSection(id);
    scrollToSection(id);
  }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a] shadow-md border-b border-slate-800">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo + nome */}
        <div className="flex items-center gap-3">
          {/* REMOVIDO border branco, mantendo apenas o círculo */}
          <div className="h-9 w-9 rounded-full overflow-hidden">
            <img
              src={logoOzark}
              alt="Logo Ozark Consultoria"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">
              Ozark Consultoria
            </span>
            <span className="text-[11px] text-white">
              Crescimento com dados e gestão
            </span>
          </div>
        </div>

        {/* Navegação desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleClick(item.id)}
                className={
                  "text-sm font-medium transition border-b-2 pb-0.5" +
                  (isActive
                    ? " text-yellow-300 border-yellow-300 underline underline-offset-8 decoration-yellow-300"
                    : " text-white/80 border-transparent hover:text-white")
                }
              >
                {item.label}
              </button>
            );
          })}

          <button
            type="button"
            onClick={toggleTheme}
            className="ml-4 px-3 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-xs font-semibold text-white transition"
            title="Alterar tema"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </nav>

        {/* Navegação mobile */}
        <div className="flex md:hidden items-center gap-3">
          <select
            className="bg-slate-800 border border-slate-600 text-xs text-white rounded-full px-3 py-1"
            onChange={(event) => {
              if (event.target.value) {
                handleClick(event.target.value);
              }
            }}
            value={activeSection}
          >
            {navItems.map((item) => (
              <option key={item.id} value={item.id}>
                {item.label}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={toggleTheme}
            className="w-8 h-8 rounded-full bg-slate-700 hover:bg-slate-600 text-[10px] font-semibold text-white transition"
            title="Alterar tema"
          >
            {theme === "dark" ? "L" : "D"}
          </button>
        </div>
      </div>
    </header>
  );
}
