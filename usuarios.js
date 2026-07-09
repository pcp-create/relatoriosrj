/*
  Controle de usuários e permissões
  Para liberar um relatório para um usuário, adicione o ID do relatório na lista "relatorios".
  O ID precisa existir no arquivo relatorios.js.
*/

const usuarios = [
  {
    usuario: "admin",
    senha: "Admin@2026",
    nome: "Administrador",
    perfil: "Administrador",
    relatorios: ["equipamentos", "faturamento", "projecao"]
  },
  {
    usuario: "rj",
    senha: "RJ@2026",
    nome: "RJ Compressores",
    perfil: "Geral",
    relatorios: ["equipamentos"]
  },
  {
    usuario: "locacao",
    senha: "Locacao@2026",
    nome: "Equipe Locação",
    perfil: "Locação",
    relatorios: ["equipamentos"]
  },
  {
    usuario: "comercial",
    senha: "Comercial@2026",
    nome: "Comercial",
    perfil: "Comercial",
    relatorios: ["faturamento", "projecao"]
  }
];
