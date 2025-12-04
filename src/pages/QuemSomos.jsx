import PageLayout from "../components/PageLayout";
import DaniloImg from "../assets/Danilo.png";
import ReydnerImg from "../assets/Reydner.png";

export default function QuemSomos() {
  return (
    <PageLayout
      eyebrow="Quem Somos"
      title="Crescimento não pode depender do improviso"
      subtitle="Unimos estratégia, dados e execução para transformar empresas."
    >
      {/* Card grande – sem margem embaixo */}
      <section className="page-card standard-card hover-lift">
        <h2 className="text-3xl font-bold text-white mb-4">A essência da Ozark</h2>
        <p className="text-slate-300 text-lg leading-relaxed">
          A Ozark nasce da combinação entre estratégia, dados e execução. Nosso foco é
          estruturar empresas para que o crescimento deixe de ser improviso e passe a ser
          resultado de gestão real.
        </p>
      </section>

      {/* Decision cards – agora com margin-top grande para separar visualmente */}
      <section className="decision-branches mt-24 mb-20">
        {[
          { title: "Estratégia", text: "Direção clara e metas possíveis." },
          { title: "Processos", text: "Operação organizada e eficiente." },
          { title: "Dados", text: "Indicadores confiáveis para decidir." },
          { title: "Automação", text: "Menos tarefas manuais, mais resultado." },
        ].map((item) => (
          <div key={item.title} className="decision-card hover-lift">
            <h3 className="text-xl font-bold text-blue-300 mb-2">{item.title}</h3>
            <p className="text-slate-300">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Fundadores */}
      <section>
        <h2 className="text-3xl font-bold text-white mb-8">Fundadores</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Danilo */}
          <div className="founder-card text-left">
            <img
              src={DaniloImg}
              className="h-40 w-40 rounded-full object-cover mb-6 border border-slate-600 shadow-lg"
            />

            <p className="text-blue-300 font-semibold uppercase text-sm mb-1">
              Fundador — Estratégia & Economia
            </p>
            <h3 className="text-2xl font-bold mb-3">Danilo Santos</h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              Profissional com atuação em análise de dados, business analytics e planejamento
              estratégico, com experiência em instituições e multinacionais do agronegócio.
            </p>

            <p className="italic text-slate-400 mb-2">
              “Gestão eficiente começa com clareza, controle e decisões bem fundamentadas.”
            </p>

            <p className="text-blue-300 font-semibold italic">
              “Pessoas com medo não mudam o país.”
            </p>
          </div>

          {/* Reydner */}
          <div className="founder-card text-left">
            <img
              src={ReydnerImg}
              className="h-40 w-40 rounded-full object-cover mb-6 border border-slate-600 shadow-lg"
            />

            <p className="text-blue-300 font-semibold uppercase text-sm mb-1">
              Cofundador — Automação, Dados & IA
            </p>
            <h3 className="text-2xl font-bold mb-3">Reydner Miranda</h3>

            <p className="text-slate-300 leading-relaxed mb-4">
              Especialista em automação de processos, dados, desenvolvimento Full-Stack,
              projetos de inovação e integração com Inteligência Artificial.
            </p>

            <p className="italic text-slate-400 mb-2">
              “Tecnologia aplicada com propósito transforma rotinas em vantagem competitiva.”
            </p>

            <p className="text-blue-300 font-semibold italic leading-relaxed">
              “Dados contam a história, dashboards mostram o caminho.
              O dinheiro segue quem sabe ler.”
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
