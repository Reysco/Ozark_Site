import PageLayout from "../components/PageLayout";
import { Button } from "../components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "../components/ui/card";

export default function Home() {
  function handleInstagramClick() {
    window.open(
      "https://www.instagram.com/ozark_consultoria_financeira/",
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <PageLayout
      id="inicio"
      eyebrow="Início"
      title="Crescimento com dados, estratégia e execução"
      subtitle="A Ozark Consultoria ajuda empresas do Centro-Oeste a crescer com clareza, processos e governança."
    >
      <section className="grid md:grid-cols-2 gap-10 mb-16">
        <div className="page-card hover-lift">
          <CardHeader>
            <CardTitle>Para quem é a Ozark</CardTitle>
            <CardDescription>
              Negócios que querem evoluir com estrutura.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-2">
            <p>• Empresas em fase de crescimento.</p>
            <p>• Gestores que buscam previsibilidade.</p>
            <p>• Donos cansados de improviso na gestão.</p>
          </CardContent>
        </div>

        <div className="page-card hover-lift">
          <CardHeader>
            <CardTitle>O que entregamos</CardTitle>
            <CardDescription>
              Gestão prática baseada em dados reais.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-slate-300 space-y-2">
            <p>• Governança Digital 360.</p>
            <p>• Dashboards confiáveis.</p>
            <p>• Automação de processos críticos.</p>
          </CardContent>
        </div>
      </section>

      <section className="flex flex-col md:flex-row gap-4">
        <Button size="lg" className="flex-1">
          Agendar conversa
        </Button>

        <Button
          size="lg"
          variant="outline"
          className="flex-1"
          onClick={handleInstagramClick}
        >
          Instagram
        </Button>
      </section>
    </PageLayout>
  );
}
