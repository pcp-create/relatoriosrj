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
    id: "projecao",
    titulo: "Projeção de Vendas",
    descricao: "Acompanhamento da projeção mensal de vendas e contratos.",
    categoria: "Comercial",
    icone: "📈",
    url: "https://app.powerbi.com/view?r=eyJrIjoiMGMzOGVlM2YtMDMzNC00ODU1LWEzZWYtYTE2YjlkYjUxY2I1IiwidCI6ImZiMmI1MzQ5LTU5MjYtNDU4ZC1iYzA3LTMwZjYxMDhjMjc2OSJ9&pageName=86d81620f1255f5b50aa"
  },
  {
    id: "programacao",
    titulo: "Programação de Serviços",
    descricao: "Acompanhamento da progração de serviços da Assistência Técnica.",
    categoria: "Planejamento",
    icone: "📅",
    url: "https://app.powerbi.com/view?r=eyJrIjoiNDYzMTJhYjYtNjY2OS00MjVhLWJkMTctOWY2N2VmNzY0NzJiIiwidCI6ImZiMmI1MzQ5LTU5MjYtNDU4ZC1iYzA3LTMwZjYxMDhjMjc2OSJ9&pageName=4be2b50aad574363d889"
  },
  {
    id: "ordemservico",
    titulo: "Análise Ordens de Serviço",
    descricao: "Verificação do Faturamento e Custos das Ordens de Serviço.",
    categoria: "Planejamento",
    icone: "⚙️",
    url: "https://app.powerbi.com/view?r=eyJrIjoiOWY4YWE4YTktOTFjOC00ZWEwLWEzNjAtYjRjOTY1NDc4YjczIiwidCI6ImZiMmI1MzQ5LTU5MjYtNDU4ZC1iYzA3LTMwZjYxMDhjMjc2OSJ9&pageName=2bf6020dd50a5cae940a"
  }
];
