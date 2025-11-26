// Site de Consultoria — Versão adaptada para Vite + Tailwind (JS)
import React, { useState } from "react";
import { Button } from "./components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { CheckCircle2, Menu, X } from "lucide-react";

export default function ConsultingSite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Removi o ": string" para funcionar em JavaScript
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <span className="font-bold text-lg">Ozark Consultoria</span>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <button
              onClick={() => scrollToSection("solucao")}
              className="hover:underline"
            >
              Solução
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="hover:underline"
            >
              Método
            </button>
            <button
              onClick={() => scrollToSection("contato")}
              className="hover:underline"
            >
              Contato
            </button>
            <Button size="sm" onClick={() => scrollToSection("contato")}>
              Agendar conversa
            </Button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t p-4 space-y-2">
            {["solucao", "metodo", "contato"].map((i) => (
              <button
                key={i}
                onClick={() => scrollToSection(i)}
                className="block w-full text-left py-2 capitalize"
              >
                {i}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="py-24 bg-muted/30" id="solucao">
        <div className="container max-w-6xl">
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-primary mb-4">
              Governança Digital 360
            </h1>
            <div className="max-w-3xl space-y-3">
              <p className="text-lg text-muted-foreground">
                Governança Digital é a estrutura que conecta dados, processos,
                finanças e comunicação para garantir decisões mais seguras,
                eficiência operacional e crescimento previsível.
              </p>
              <p className="text-muted-foreground">
                Público ideal: empresários e empresas de médio e grande porte
                dos setores de serviços e varejo que buscam escalar com
                controle, margem e previsibilidade.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                size="lg"
                onClick={() => scrollToSection("contato")}
              >
                Agendar conversa estratégica
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("metodo")}
              >
                Entender a Governança Digital
              </Button>
            </div>
          </div>

          {/* Cards de pilares */}
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Desempenho</CardTitle>
                <CardDescription>Gestão orientada a resultados.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-muted-foreground">
                <ul className="space-y-1">
                  <li>KPIs estratégicos</li>
                  <li>Dashboards executivos</li>
                  <li>Acompanhamento de crescimento</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Gestão Financeira e Estratégica</CardTitle>
                <CardDescription>Decisões seguras.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-muted-foreground">
                <ul className="space-y-1">
                  <li>Análise de custos e margens</li>
                  <li>Orçado x Realizado</li>
                  <li>Planejamento financeiro</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Engajamento</CardTitle>
                <CardDescription>Pessoas e comunicação.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm space-y-2 text-muted-foreground">
                <ul className="space-y-1">
                  <li>Automação WhatsApp e e-mail</li>
                  <li>Processos padronizados</li>
                  <li>Integração entre times</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* MÉTODO + SERVIÇOS DETALHADOS */}
      <section id="metodo" className="py-24 bg-muted/40">
        <div className="container max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Produto, serviços e execução profissional
            </h2>
            <p className="text-muted-foreground text-lg">
              A Governança Digital 360 é nosso produto principal, mas também
              entregamos serviços especializados que podem ser contratados de
              forma independente ou combinados conforme a necessidade da
              empresa.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            <Card>
              <CardHeader className="text-center">
                <CardTitle>Produto · Governança Digital 360</CardTitle>
                <CardDescription>Combo completo de gestão e dados.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Diagnóstico financeiro e operacional
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Definição de metas estratégicas
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Dashboards executivos e KPIs
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Acompanhamento mensal e rituais de gestão
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Educação financeira e tomada de decisão
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Serviços em Dados &amp; Automatização</CardTitle>
                <CardDescription>Eficiência operacional e inteligência.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Automação em Excel e VBA
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Power Query e processos de ETL
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Dashboards interativos
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Power BI com DAX
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Manipulação de grandes volumes de dados
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Automação de Comunicação</CardTitle>
                <CardDescription>Relacionamento escalável e organizado.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Automação de WhatsApp
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Disparo inteligente de e-mails
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Fluxos automáticos de comunicação
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Integração com processos financeiros
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Redução de tarefas manuais
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA / DIAGNÓSTICO */}
      <section id="contato" className="py-24">
        <div className="container max-w-5xl space-y-12">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Vamos analisar a realidade da sua empresa?
            </h2>
            <p className="text-muted-foreground text-lg">
              Antes de falar em soluções, é preciso responder às perguntas
              certas.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <CardTitle>Quanto sua empresa cresceu?</CardTitle>
                <CardDescription>
                  Você acompanha crescimento real ou apenas faturamento bruto?
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Quem é o vilão dos seus custos?</CardTitle>
                <CardDescription>
                  Custos invisíveis corroem margem e travam o crescimento.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle>Suas decisões são baseadas em dados?</CardTitle>
                <CardDescription>
                  Ou ainda dependem de feeling e informações desencontradas?
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <CardDescription className="text-base">
                  Projetos a partir de <strong>R$ 3.500</strong> · Acompanhamento
                  mensal <strong>R$ 2.200</strong>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="flex-1">
                  Agendar conversa estratégica
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="flex-1"
                  asChild
                >
                  <a
                    href="https://www.instagram.com/ozark_consultoria_empresarial"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar com a Ozark
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* PREÇOS E MODELOS DE CONTRATAÇÃO */}
      <section className="py-24 bg-muted/50">
        <div className="container max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Modelos de contratação
            </h2>
            <p className="text-muted-foreground text-lg">
              Atendemos empresas de médio e grande porte dos setores de serviços
              e varejo. Os valores refletem projetos estruturados, com
              diagnóstico, execução e governança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader className="text-center">
                <Badge className="mb-2">Produto Principal</Badge>
                <CardTitle>Governança Digital 360</CardTitle>
                <CardDescription>
                  Implantação completa de governança e dados.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <ul className="space-y-2">
                  <li>Diagnóstico financeiro e operacional</li>
                  <li>KPIs estratégicos e dashboards executivos</li>
                  <li>Automação de rotinas-chave</li>
                  <li>Rituais de gestão e acompanhamento</li>
                </ul>
                <p className="font-semibold mt-4">
                  Investimento: <strong>R$ 10.000</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Dados &amp; Automatização</CardTitle>
                <CardDescription>Projetos sob demanda.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <ul className="space-y-2">
                  <li>Excel avançado, VBA e Power Query</li>
                  <li>ETL e grandes volumes de dados</li>
                  <li>Dashboards e Power BI com DAX</li>
                </ul>
                <p className="font-semibold mt-4">
                  Projetos a partir de <strong>R$ 7.000</strong>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <CardTitle>Automação de Comunicação</CardTitle>
                <CardDescription>
                  Escala operacional com eficiência.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <ul className="space-y-2">
                  <li>WhatsApp automatizado</li>
                  <li>E-mails transacionais e automáticos</li>
                  <li>Fluxos integrados a financeiro, CRM e cobrança</li>
                </ul>
                <p className="font-semibold mt-4">
                  Projetos a partir de <strong>R$ 3.500</strong>
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">Acompanhamento estratégico mensal</p>
            <p className="text-xl font-semibold">R$ 2.200 / mês</p>
          </div>
        </div>
      </section>

      <footer className="py-6 border-t text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Ozark Consultoria Empresarial
      </footer>
    </div>
  );
}
