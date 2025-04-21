// src/feature/profile/data/privacy-data.ts
import { PrivacyAndLegalSection, PrivacyAndLegalData } from "../types/privacy";

// Conteúdo fictício da política de privacidade
export const privacySections: PrivacyAndLegalSection[] = [
  {
    id: "1",
    title: "1. Informações que coletamos",
    content:
      "Coletamos informações pessoais quando você se registra em nossa plataforma, usa nossos serviços ou interage conosco. Isso pode incluir seu nome, endereço de e-mail, número de telefone, endereço, informações de pagamento e outras informações que você fornece ao criar uma conta ou usar nossos serviços. Também coletamos informações sobre como você usa nossa plataforma, incluindo dados de sessão, estatísticas de uso e informações técnicas sobre seu dispositivo.",
  },
  {
    id: "2",
    title: "2. Como usamos suas informações",
    content:
      "Usamos suas informações para fornecer, manter e melhorar nossos serviços, processar suas transações, enviar comunicações relacionadas ao serviço, personalizar sua experiência, desenvolver novos recursos e proteger nossa plataforma. Também podemos usar suas informações para entrar em contato com você sobre atualizações de serviço, eventos, promoções e outras notícias sobre produtos e serviços oferecidos por nós.",
  },
  {
    id: "3",
    title: "3. Compartilhamento de informações",
    content:
      "Podemos compartilhar suas informações com prestadores de serviços que trabalham em nosso nome, parceiros de negócios, autoridades quando exigido por lei, e em conexão com uma transação comercial como uma fusão ou venda de ativos. Não compartilhamos suas informações pessoais com terceiros para fins de marketing sem seu consentimento.",
  },
  {
    id: "4",
    title: "4. Segurança de dados",
    content:
      "Implementamos medidas técnicas e organizacionais para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou método de armazenamento eletrônico é 100% seguro, e não podemos garantir sua segurança absoluta.",
  },
  {
    id: "5",
    title: "5. Seus direitos e escolhas",
    content:
      "Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Você também pode optar por não receber comunicações de marketing a qualquer momento. Para exercer esses direitos ou fazer perguntas sobre nossas práticas de privacidade, entre em contato conosco através das informações fornecidas abaixo.",
  },
  {
    id: "6",
    title: "6. Alterações nesta política",
    content:
      "Podemos atualizar esta Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações publicando a nova Política de Privacidade em nosso site e, quando apropriado, entrando em contato com você diretamente. Recomendamos que você revise periodicamente esta política para se manter informado sobre como estamos protegendo suas informações.",
  },
  {
    id: "7",
    title: "7. Contato",
    content:
      "Se você tiver dúvidas ou preocupações sobre esta Política de Privacidade ou nossas práticas de tratamento de dados, entre em contato conosco pelo e-mail: privacidade@nossaempresa.com.br",
  },
];

export const privacyData: PrivacyAndLegalData = {
  title: "Política de Privacidade",
  lastUpdated: "10 de maio de 2023",
  introduction:
    "Esta Política de Privacidade descreve como coletamos, usamos e compartilhamos suas informações pessoais quando você usa nossos serviços. Ao usar nossa plataforma, você concorda com a coleta e uso de informações de acordo com esta política.",
  footer:
    "Ao usar nossos serviços, você concorda com os termos desta Política de Privacidade.",
  sections: privacySections,
};
