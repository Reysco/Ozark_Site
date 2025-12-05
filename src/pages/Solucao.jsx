import PageLayout from "../components/PageLayout";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../components/ui/card";

export default function Solucao() {
  return (
    <PageLayout
      id="solucao"
      eyebrow="Solução"
      title="Governança Digital 360"
      subtitle="Estrutura completa de processos, dados e finanças para empresas crescerem com previsibilidade."
    >
      <section className="grid md:grid-cols-3 gap-10">
        <div className="decision-card hover-lift">
          <CardHeader>
            <CardTitle>Desempenho</CardTitle>
            <CardDescription>Gestão orientada a metas reais.</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-2">
            <p>• KPIs estratégicos.</p>
            <p>• Dashboards claros.</p>
            <p>• Acompanhamento mensal.</p>
          </CardContent>
        </div>

        <div className="decision-card hover-lift">
          <CardHeader>
            <CardTitle>Gestão Financeira</CardTitle>
            <CardDescription>Decisões baseadas em números.</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-2">
            <p>• Margem e precificação.</p>
            <p>• Orçado x real.</p>
            <p>• Planejamento financeiro.</p>
          </CardContent>
        </div>

        <div className="decision-card hover-lift">
          <CardHeader>
            <CardTitle>Processos & Equipes</CardTitle>
            <CardDescription>Operação funcionando sempre.</CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-2">
            <p>• Padronização.</p>
            <p>• Automação.</p>
            <p>• Rotina de gestão.</p>
          </CardContent>
        </div>
      </section>
    </PageLayout>
  );
}
