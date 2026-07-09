/*
  Cadastro dos relatórios disponíveis no portal.
  Para adicionar um novo relatório:
  1) Crie um novo bloco dentro da lista relatorios;
  2) Defina um ID único;
  3) Cole o link do Power BI no campo url;
  4) Libere o ID no arquivo usuarios.js para os usuários desejados.
*/

const relatorios = [
  {
    id: "equipamentos",
    titulo: "Equipamentos de Locação",
    descricao: "Consulta dos equipamentos disponíveis, locados, indisponíveis e em revisão.",
    categoria: "Operacional",
    icone: "📦",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMjcxNjczN2QtZmUyNC00ZjJmLTk5OGEtYzcxYTBiNWIxZGI3IiwidCI6ImZiMmI1MzQ5LTU5MjYtNDU4ZC1iYzA3LTMwZjYxMDhjMjc2OSJ9&pageName=5a49a992d19ebc5f2eb9"
  },
  {
    id: "faturamento",
    titulo: "Faturamento",
    descricao: "Acompanhamento de faturamento por período, empresa e vendedor.",
    categoria: "Comercial",
    icone: "💰",
    url: "COLE_AQUI_O_LINK_DO_POWER_BI"
  },
  {
    id: "projecao",
    titulo: "Projeção de Vendas",
    descricao: "Acompanhamento da projeção mensal de vendas e contratos.",
    categoria: "Comercial",
    icone: "📈",
    url: "COLE_AQUI_O_LINK_DO_POWER_BI"
  }
];
