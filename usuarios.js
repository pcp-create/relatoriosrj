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
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "jose.lino",
    senha: "Rj@482Km",
    nome: "Jose Lino",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "alexandro",
    senha: "Lp#731Qa",
    nome: "Alexandro Spaeth",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "paulo",
    senha: "Mx!954Te",
    nome: "Paulo Duwe",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "bruno",
    senha: "Vn$286Ru",
    nome: "Bruno Pereira",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "viviane",
    senha: "Gh*619Pw",
    nome: "Viviane Spaeth",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "lucas",
    senha: "Qm#482Xv",
    nome: "Lucas Feliciano",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "ana.paula",
    senha: "Fc@864Zw",
    nome: "Ana Paula",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  },
  {
    usuario: "priscyla",
    senha: "Hs%251Nd",
    nome: "Priscyla",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao", "programacao", "ordemservico", "faroloficina"]
  }
];
