import logoOzark from "../assets/logo.png";

export default function PageLayout({ eyebrow, title, subtitle, children }) {
  return (
    <div className="w-full">

      {/* Banner fixo no tema escuro */}
      <section className="w-full bg-[#0f172a] border-b border-slate-700">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-10">

          <div className="h-24 w-24 rounded-full shadow-lg border border-slate-600 overflow-hidden">
            <img src={logoOzark} alt="Logo Ozark" className="h-full w-full object-cover" />
          </div>

          <div className="flex-1">
            {eyebrow && (
              <span className="text-xs uppercase tracking-wider text-blue-400 font-semibold">
                {eyebrow}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mt-2 text-white">
              {title}
            </h1>

            {subtitle && (
              <p className="text-slate-300 max-w-2xl text-lg mt-3">
                {subtitle}
              </p>
            )}
          </div>

        </div>
      </section>

      {/* Conteúdo com animação */}
      <main className="container mx-auto px-6 py-14 animate-page">
        {children}
      </main>
    </div>
  );
}
