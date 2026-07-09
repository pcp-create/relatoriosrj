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
    relatorios: ["equipamentos", "projecao"]
  },
  {
    usuario: "jose.lino",
    senha: "Rj@482Km",
    nome: "Jose Lino",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao"]
  },
  {
    usuario: "alexandro",
    senha: "Lp#731Qa",
    nome: "Alexandro Spaeth",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao"]
  },
  {
    usuario: "paulo",
    senha: "Mx!954Te",
    nome: "Paulo Duwe",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao"]
  },
  {
    usuario: "bruno",
    senha: "Vn$286Ru",
    nome: "Bruno Pereira",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao"]
  },
  {
    usuario: "viviane",
    senha: "Gh*619Pw",
    nome: "Viviane Spaeth",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao"]
  },
  {
    usuario: "lucas",
    senha: "Qm#482Xv",
    nome: "Lucas Feliciano",
    perfil: "Geral",
    relatorios: ["equipamentos", "projecao"]
  }
];
