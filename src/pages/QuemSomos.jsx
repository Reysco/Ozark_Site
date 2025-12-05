import { useState } from "react";
import PageLayout from "../components/PageLayout";
import DaniloImg from "../assets/Danilo.png";
import ReydnerImg from "../assets/Reydner.png";

export default function QuemSomos() {
  const questions = [
    "Sua empresa sabe se está no melhor regime tributário?",
    "Você revisa periodicamente benefícios fiscais disponíveis?",
    "Existe controle claro dos impostos pagos?",
    "Sua empresa já fez planejamento tributário estruturado?",
    "As decisões fiscais são baseadas em dados confiáveis?",
  ];

  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [resultText, setResultText] = useState("");

  const totalQuestions = questions.length;
  const progress = finished ? 100 : (questionIndex / totalQuestions) * 100;

  function handleAnswer(value) {
    const newScore = score + value;
    setScore(newScore);

    const nextIndex = questionIndex + 1;

    if (nextIndex < totalQuestions) {
      setQuestionIndex(nextIndex);
    } else {
      setFinished(true);

      if (newScore <= 2) {
        setResultText(
          "Há fortes indícios de falta de planejamento tributário. O potencial de economia é alto."
        );
      } else if (newScore <= 4) {
        setResultText(
          "Sua empresa tem alguma organização fiscal, mas ainda perde oportunidades importantes."
        );
      } else {
        setResultText(
          "Sua empresa possui maturidade fiscal acima da média, mas revisões estratégicas ainda podem gerar ganhos."
        );
      }
    }
  }

  return (
    <PageLayout
      id="quem-somos"
      eyebrow="Quem Somos"
      title="Crescimento não pode depender do improviso"
      subtitle="Unimos estratégia, dados e execução para transformar empresas."
    >
      {/* A essência da Ozark */}
      <section className="page-card standard-card hover-lift">
        <h2 className="text-3xl font-bold mb-4">A essência da Ozark</h2>
        <p className="text-lg leading-relaxed text-[var(--muted)]">
          A Ozark nasce da combinação entre estratégia, dados e execução. Nosso
          foco é estruturar empresas para que o crescimento deixe de ser
          improviso e passe a ser resultado de gestão real, com controle,
          previsibilidade e decisões fundamentadas.
        </p>
      </section>

      {/* Cards Estratégicos */}
      <section className="decision-branches mt-24 mb-20">
        {[
          {
            title: "Estratégia",
            text: "Direção clara, metas possíveis e alinhamento entre sócios, gestores e operação.",
          },
          {
            title: "Processos",
            text: "Operação organizada, rotinas bem definidas e responsabilidades claras.",
          },
          {
            title: "Dados",
            text: "Indicadores confiáveis para decidir com base em fatos, não em achismo.",
          },
          {
            title: "Automação",
            text: "Menos tarefas manuais, mais escala e eficiência com tecnologia aplicada.",
          },
        ].map((item) => (
          <div key={item.title} className="decision-card hover-lift">
            <h3 className="text-xl font-bold text-blue-300 mb-2">
              {item.title}
            </h3>
            <p className="text-[var(--muted)]">{item.text}</p>
          </div>
        ))}
      </section>

      {/* Estruturamos empresas */}
      <section className="page-card standard-card hover-lift mt-24 mb-24">
        <h2 className="text-2xl font-bold mb-3">
          Estruturamos empresas para crescer com controle
        </h2>
        <p className="text-[var(--muted)] mb-3">
          A Ozark Consultoria é especializada em estruturar processos, dados e
          finanças para empresas que querem crescer com previsibilidade.
        </p>
        <p className="text-[var(--muted)]">
          Entramos na empresa para organizar a casa, construir rotinas de gestão
          e deixar tudo funcionando de forma clara – sem dependência, sem
          confusão e sem decisões baseadas apenas em intuição.
        </p>
      </section>

      {/* Por que a Ozark existe */}
      <section className="page-card standard-card hover-lift mt-24 mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--accent)]">
          Propósito
        </span>
        <h2 className="text-2xl font-bold mt-3 mb-3">Por que a Ozark existe</h2>
        <p className="text-[var(--muted)]">
          A Ozark nasceu da constatação de que muitas empresas crescem “no
          sentimento” – sem processos estruturados, sem indicadores confiáveis e
          sem um plano claro de longo prazo. Nosso propósito é ajudar esses
          negócios a organizarem sua gestão, para que o crescimento seja
          previsível, sustentável e orientado por dados.
        </p>
      </section>

      {/* Missão, Visão, Valores */}
      <section className="mt-24 mb-20">
        <h2 className="text-2xl font-bold text-center mb-8">
          Missão, Visão e Valores
        </h2>
        <div className="decision-branches">
          <div className="decision-card hover-lift">
            <h3 className="text-lg font-bold mb-2">Missão</h3>
            <p className="text-[var(--muted)]">
              Impulsionar o crescimento de empresas por meio de gestão
              estruturada, dados confiáveis e decisões estratégicas.
            </p>
          </div>

          <div className="decision-card hover-lift">
            <h3 className="text-lg font-bold mb-2">Visão</h3>
            <p className="text-[var(--muted)]">
              Ser referência em governança, dados e automação para empresas
              regionais, reconhecida por transformar negócios em operações
              profissionais e escaláveis.
            </p>
          </div>

          <div className="decision-card hover-lift">
            <h3 className="text-lg font-bold mb-2">Valores</h3>
            <p className="text-[var(--muted)]">
              Eficiência, transparência, responsabilidade com resultados, ética
              e visão de longo prazo.
            </p>
          </div>
        </div>
      </section>

      {/* Nosso símbolo */}
      <section className="page-card standard-card hover-lift mt-24 mb-20">
        <span className="text-xs uppercase tracking-[0.3em] font-semibold text-[var(--accent)]">
          Identidade
        </span>
        <h2 className="text-2xl font-bold mt-3 mb-3">
          Nosso símbolo — a Onça
        </h2>
        <p className="text-[var(--muted)] mb-3">
          A onça traduz força, estratégia e precisão — valores que também movem
          a Ozark na transformação de empresas.
        </p>
      </section>

      {/* Para quem a Ozark foi criada */}
      <section className="page-card standard-card hover-lift mt-24 mb-20">
        <h2 className="text-2xl font-bold mb-3">
          Para quem a Ozark foi criada
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-[var(--muted)]">
          <li>Empresas em fase de crescimento</li>
          <li>Empresas que precisam de métricas claras</li>
          <li>Empresas que querem previsibilidade e controle</li>
          <li>Empresas que desejam profissionalizar suas operações</li>
        </ul>
      </section>

      {/* Fundadores */}
      <section className="mt-24 mb-20">
        <h2 className="text-3xl font-bold mb-8">Fundadores</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Danilo */}
          <div className="founder-card text-left">
            <img
              src={DaniloImg}
              className="h-40 w-40 rounded-full object-cover mb-6 border border-slate-300 shadow-lg"
              alt="Danilo Santos"
            />

            <p className="text-blue-300 font-semibold uppercase text-sm mb-1">
              Fundador — Estratégia &amp; Economia
            </p>

            <h3 className="text-2xl font-bold mb-3">Danilo Santos</h3>

            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Profissional com atuação em análise de dados, planejamento
              estratégico e business analytics.
            </p>

            <p className="italic text-[var(--muted)] mb-2">
              “Gestão eficiente começa com clareza, controle e decisões bem
              fundamentadas.”
            </p>

            <p className="text-blue-300 font-semibold italic mb-4">
              “Pessoas com medo não mudam o país.”
            </p>

            <a
              href="https://www.linkedin.com/in/danilo-santos-8750ab231/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200 underline underline-offset-4"
            >
              Ver perfil no LinkedIn
            </a>
          </div>

          {/* Reydner */}
          <div className="founder-card text-left">
            <img
              src={ReydnerImg}
              className="h-40 w-40 rounded-full object-cover mb-6 border border-slate-300 shadow-lg"
              alt="Reydner Miranda"
            />

            <p className="text-blue-300 font-semibold uppercase text-sm mb-1">
              Cofundador — Automação, Dados &amp; IA
            </p>

            <h3 className="text-2xl font-bold mb-3">Reydner Miranda</h3>

            <p className="text-[var(--muted)] leading-relaxed mb-4">
              Especialista em automação de processos, dados e integração com
              Inteligência Artificial.
            </p>

            <p className="italic text-[var(--muted)] mb-2">
              “Tecnologia aplicada com propósito transforma rotinas em vantagem
              competitiva.”
            </p>

            <p className="text-blue-300 font-semibold italic leading-relaxed mb-4">
              “Dados contam a história, dashboards mostram o caminho. O dinheiro
              segue quem sabe ler.”
            </p>

            <a
              href="https://www.linkedin.com/in/reydnermiranda/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex text-sm font-semibold text-blue-300 hover:text-blue-200 underline underline-offset-4"
            >
              Ver perfil no LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Diagnóstico fiscal */}
      <section className="page-card standard-card hover-lift mt-24 mb-0">
        <h2 className="text-2xl font-bold mb-2">
          Diagnóstico de Benefícios Fiscais
        </h2>
        <p className="text-[var(--muted)] mb-4">
          Responda em menos de 2 minutos e veja se sua empresa pode estar
          pagando impostos desnecessários.
        </p>

        <div className="w-full h-2 rounded-full bg-slate-200/70 mb-6 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        {!finished ? (
          <div className="space-y-6">
            <div className="text-lg font-semibold">
              Pergunta {questionIndex + 1} de {totalQuestions}
            </div>

            <div className="text-xl font-bold">
              {questions[questionIndex]}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <button
                onClick={() => handleAnswer(1)}
                className="flex-1 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-500 transition"
              >
                Sim
              </button>

              <button
                onClick={() => handleAnswer(0)}
                className="flex-1 py-3 rounded-xl border border-slate-300 font-semibold text-[var(--primary)] bg-[var(--card)] hover:bg-slate-100/80 transition"
              >
                Não / Não sei
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Resultado inicial</h3>
            <p className="text-[var(--muted)]">{resultText}</p>

            <p className="text-[var(--muted)]">
              Este diagnóstico é um ponto de partida. Para uma análise
              aprofundada, fale conosco.
            </p>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
