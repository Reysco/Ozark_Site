import logoOzark from "../assets/logo.png";

export default function PageLayout({ eyebrow, title, subtitle, children }) {
  return (
    <div className="w-full">
      {/* Banner da página – segue o tema (page-banner em index.css) */}
      <section className="w-full page-banner">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-10">
          <div className="h-24 w-24 rounded-full shadow-lg border border-slate-300 overflow-hidden">
            <img
              src={logoOzark}
              alt="Logo Ozark"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1">
            {eyebrow && (
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--accent)]">
                {eyebrow}
              </span>
            )}

            <h1 className="text-3xl md:text-4xl font-bold mt-2">
              {title}
            </h1>

            {subtitle && (
              <p className="text-base md:text-lg max-w-2xl mt-3 text-[var(--muted)]">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Conteúdo */}
      <main className="container mx-auto px-6 py-14 animate-page">
        {children}
      </main>
    </div>
  );
}
