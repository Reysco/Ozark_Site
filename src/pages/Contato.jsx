import PageLayout from "../components/PageLayout";
import { Button } from "../components/ui/button";

export default function Contato() {
  return (
    <PageLayout
      eyebrow="Contato"
      title="Vamos conversar?"
      subtitle="Conte sobre o momento da sua empresa."
    >

      <section className="space-y-8 text-slate-300">

        <div>
          <h2 className="text-2xl font-bold text-white">Canais</h2>
          <p className="mt-2">Instagram: @ozark_consultoria_financeira</p>
          <p className="mt-1">E-mail: contato@ozark.com.br</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">O que nos contar</h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Segmento</li>
            <li>Faturamento</li>
            <li>Principal desafio</li>
          </ul>
        </div>

        <Button size="lg" className="mt-4">Agendar conversa</Button>

      </section>

    </PageLayout>
  );
}
