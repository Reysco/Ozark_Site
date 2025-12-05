import PageLayout from "../components/PageLayout";

export default function Privacidade() {
  return (
    <PageLayout
      id="privacidade"
      eyebrow="Privacidade"
      title="Tratamento de dados"
      subtitle="Como utilizamos as informações fornecidas."
    >
      <section className="space-y-10 text-slate-300">
        <div>
          <h2 className="text-2xl font-bold text-white">1. Dados coletados</h2>
          <p className="mt-2">
            Coletamos apenas os dados fornecidos voluntariamente por você, como
            nome, e-mail, telefone e informações sobre sua empresa, quando
            preenche formulários de contato ou agenda uma conversa.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">2. Finalidade</h2>
          <p className="mt-2">
            Utilizamos os dados exclusivamente para contato, envio de propostas,
            comunicação relacionada aos serviços da Ozark Consultoria e
            melhoria da experiência em nossos canais.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">3. Compartilhamento</h2>
          <p className="mt-2">
            Não vendemos ou alugamos seus dados. Informações podem ser
            compartilhadas apenas com parceiros diretamente ligados à prestação
            dos serviços contratados, sempre de forma limitada ao necessário.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">4. Segurança</h2>
          <p className="mt-2">
            Adotamos medidas técnicas e organizacionais para proteger seus
            dados contra acessos não autorizados, perda ou alteração indevida.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white">5. Direitos do titular</h2>
          <p className="mt-2">
            Você pode solicitar a atualização ou exclusão dos seus dados a
            qualquer momento, entrando em contato pelos canais oficiais da
            Ozark Consultoria.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
