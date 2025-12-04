import PageLayout from "../components/PageLayout";

export default function Privacidade() {
  return (
    <PageLayout
      eyebrow="Privacidade"
      title="Tratamento de dados"
      subtitle="Como utilizamos as informações fornecidas."
    >

      <section className="space-y-10 text-slate-300">

        <div>
          <h2 className="text-2xl font-bold text-white">1. Dados coletados</h2>
          <p className="mt-2">Nome, e-mail e informações enviadas voluntariamente.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">2. Finalidade</h2>
          <p className="mt-2">Contato, propostas e execução dos serviços.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">3. Compartilhamento</h2>
          <p className="mt-2">Nunca vendemos dados. Somente quando necessário para execução.</p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">4. Segurança</h2>
          <p className="mt-2">Medidas técnicas para proteção das informações.</p>
        </div>

      </section>

    </PageLayout>
  );
}
