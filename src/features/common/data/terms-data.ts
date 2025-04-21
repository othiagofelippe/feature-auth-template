// src/feature/profile/data/terms-data.ts
import { PrivacyAndLegalSection, PrivacyAndLegalData } from "../types/privacy";

// Conteúdo fictício dos termos e condições
export const termsContent: PrivacyAndLegalSection[] = [
  {
    id: "1",
    title: "1. Aceitação dos Termos",
    content:
      "Ao acessar ou usar nossos serviços, você concorda em ficar vinculado a estes Termos de Uso e a todas as leis e regulamentos aplicáveis. Se você não concordar com qualquer um destes termos, você está proibido de usar ou acessar este serviço. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.",
  },
  {
    id: "2",
    title: "2. Uso da Licença",
    content:
      "É concedida permissão para baixar temporariamente uma cópia dos materiais no site da empresa apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode: modificar ou copiar os materiais; usar os materiais para qualquer finalidade comercial ou para exibição pública; tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da empresa; remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.",
  },
  {
    id: "3",
    title: "3. Isenção de responsabilidade",
    content:
      "Os materiais no site da empresa são fornecidos 'como estão'. A empresa não oferece garantias, expressas ou implícitas, e por este meio isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos. Além disso, a empresa não garante ou faz qualquer representação relativa à precisão, resultados prováveis ou confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a tais materiais ou em quaisquer sites vinculados a este site.",
  },
  {
    id: "4",
    title: "4. Limitações",
    content:
      "Em nenhum caso a empresa ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais no site da empresa, mesmo que a empresa ou um representante autorizado da empresa tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.",
  },
  {
    id: "5",
    title: "5. Revisões e Erratas",
    content:
      "Os materiais exibidos no site da empresa podem incluir erros técnicos, tipográficos ou fotográficos. A empresa não promete que qualquer material em seu site seja preciso, completo ou atual. A empresa pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. A empresa não se compromete a atualizar os materiais.",
  },
  {
    id: "6",
    title: "6. Links",
    content:
      "A empresa não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso pela empresa do site. O uso de qualquer site vinculado é por conta e risco do usuário.",
  },
  {
    id: "7",
    title: "7. Modificações dos Termos de Uso",
    content:
      "A empresa pode revisar estes termos de uso de seu site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual destes Termos e Condições de Uso.",
  },
  {
    id: "8",
    title: "8. Lei aplicável",
    content:
      "Estes termos e condições são regidos e interpretados de acordo com as leis brasileiras e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais daquele Estado ou localidade.",
  },
];

export const termsData: PrivacyAndLegalData = {
  title: "Termos e Condições",
  lastUpdated: "10 de maio de 2023",
  introduction:
    'Estes Termos de Uso constituem um acordo legalmente vinculativo feito entre você, seja pessoalmente ou em nome de uma entidade ("você") e nossa empresa ("nós", "nos" ou "nosso"), relativos ao acesso ao nosso site e uso de nossos serviços.',
  footer:
    "Ao acessar ou usar nossos serviços, você concorda com estes Termos e Condições.",
  sections: termsContent,
};
