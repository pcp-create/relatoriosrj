/*
  Controle de usuários e permissões
  Para liberar um relatório para um usuário, adicione o ID do relatório na lista "relatorios".
  O ID precisa existir no arquivo relatorios.js.
*/

const usuarios = [
  {
    usuario: "guilherme.waltrick",
    senha: "317622",
    nome: "Guilherme",
    perfil: "Administrador",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "jose.lino",
    senha: "Rj@482Km",
    nome: "Jose Lino",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "alexandro",
    senha: "Lp#731Qa",
    nome: "Alexandro Spaeth",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "adriano",
    senha: "G7#k2@",
    nome: "Adriano Xavier",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "paulo",
    senha: "Mx!954Te",
    nome: "Paulo Duwe",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "bruno",
    senha: "Vn$286Ru",
    nome: "Bruno Pereira",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "viviane",
    senha: "Gh*619Pw",
    nome: "Viviane Spaeth",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "lucas",
    senha: "Qm#482Xv",
    nome: "Lucas Feliciano",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "ana.paula",
    senha: "Fc@864Zw",
    nome: "Ana Paula",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "priscyla",
    senha: "Hs%251Nd",
    nome: "Priscyla",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina", "despesas", "calendario", "listaprecos"]
  },
  {
    usuario: "taylor",
    senha: "K7M4P2",
    nome: "Taylor",
    perfil: "Vendedor",
    relatorios: ["equipamentos", "projecao", "despesas", "faroloficina", "listaprecos"]
  },
  {
    usuario: "lucas.baldo",
    senha: "R9X3A6",
    nome: "Lucas Baldo",
    perfil: "Vendedor",
    relatorios: ["equipamentos", "projecao", "despesas", "faroloficina", "listaprecos"]
  },
  {
    usuario: "marcelo",
    senha: "B5N8Q1",
    nome: "Marcelo Pinheiro",
    perfil: "Vendedor",
    relatorios: ["equipamentos", "projecao", "despesas", "faroloficina", "listaprecos"]
  },
  {
    usuario: "fabio",
    senha: "T2W7L9",
    nome: "Fabio",
    perfil: "Vendedor / Técnico",
    relatorios: ["equipamentos", "projecao", "programacao", "despesas", "faroloficina", "calendario", "listaprecos"]
  },
  {
    usuario: "danieli",
    senha: "R1TER3",
    nome: "Danieli",
    perfil: "Comercial",
    relatorios: ["equipamentos", "projecao", "programacao", "faroloficina", "calendario", "listaprecos"]
  }
];
