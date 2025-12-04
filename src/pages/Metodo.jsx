import PageLayout from "../components/PageLayout";

export default function Metodo() {
  return (
    <PageLayout
      eyebrow="Método"
      title="Do diagnóstico à execução"
      subtitle="Uma metodologia que transforma improviso em gestão consistente."
    >

      <section className="space-y-10 text-slate-300">

        <div>
          <h2 className="text-2xl font-bold text-white">1. Diagnóstico</h2>
          <p className="mt-2">Mapeamento da operação, finanças e processos.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">2. Indicadores</h2>
          <p className="mt-2">Definição de KPIs e rituais de gestão.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">3. Automação</h2>
          <p className="mt-2">Dashboards, integrações e redução de trabalho manual.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">4. Acompanhamento</h2>
          <p className="mt-2">Melhoria contínua e revisão de resultados.</p>
        </div>

      </section>

    </PageLayout>
  );
}
