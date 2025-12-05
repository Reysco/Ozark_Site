import logoOzark from "../assets/logo.png";

export default function PageLayout({ id, eyebrow, title, subtitle, children }) {
  return (
    <div id={id} className="w-full scroll-mt-24">
      {/* Banner da página */}
      <section className="w-full page-banner">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 px-6 py-10">
          {/* REMOVIDO border branco, mantendo apenas o círculo com sombra */}
          <div className="h-24 w-24 rounded-full shadow-lg overflow-hidden">
            <img
              src={logoOzark}
              alt="Logo Ozark"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-1">
            {eyebrow && (
              <span className="eyebrow inline-block mb-2">
                {eyebrow}
              </span>
            )}

            {title && (
              <h1 className="text-3xl md:text-4xl font-bold mb-3">
                {title}
              </h1>
            )}

            {subtitle && (
              <p className="max-w-2xl text-base md:text-lg text-[var(--muted)]">
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
