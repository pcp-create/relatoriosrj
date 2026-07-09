let usuarioLogado = null;
let filtroAtual = "";

const loginScreen = document.getElementById("loginScreen");
const app = document.getElementById("app");
const errorMessage = document.getElementById("errorMessage");
const powerbiFrame = document.getElementById("powerbiFrame");
const menu = document.getElementById("menu");
const reportArea = document.getElementById("reportArea");
const reportTitle = document.getElementById("reportTitle");
const cardsRelatorios = document.getElementById("cardsRelatorios");
const emptyState = document.getElementById("emptyState");
const userInfo = document.getElementById("userInfo");
const accessChip = document.getElementById("accessChip");
const searchReport = document.getElementById("searchReport");

function login() {
  const user = document.getElementById("user").value.trim();
  const password = document.getElementById("password").value.trim();

  const validUser = usuarios.find(item => item.usuario === user && item.senha === password);

  if (!validUser) {
    errorMessage.style.display = "block";
    return;
  }

  usuarioLogado = validUser;

  localStorage.setItem("rj_logged", "true");
  localStorage.setItem("rj_user", validUser.usuario);

  loginScreen.style.display = "none";
  app.style.display = "block";
  errorMessage.style.display = "none";

  atualizarCabecalhoUsuario();
  montarMenuRelatorios();
}

function logout() {
  localStorage.removeItem("rj_logged");
  localStorage.removeItem("rj_user");

  usuarioLogado = null;
  powerbiFrame.src = "";
  searchReport.value = "";
  filtroAtual = "";

  voltarMenu();
  loginScreen.style.display = "flex";
  app.style.display = "none";
}

function atualizarCabecalhoUsuario() {
  if (!usuarioLogado) return;

  userInfo.innerText = `${usuarioLogado.nome} • ${usuarioLogado.perfil}`;

  const total = usuarioLogado.relatorios.length;
  accessChip.innerText = `${total} relatório${total === 1 ? "" : "s"} liberado${total === 1 ? "" : "s"}`;
}

function obterRelatoriosPermitidos() {
  if (!usuarioLogado) return [];

  return relatorios.filter(relatorio => usuarioLogado.relatorios.includes(relatorio.id));
}

function montarMenuRelatorios() {
  const textoBusca = filtroAtual.toLowerCase().trim();
  const permitidos = obterRelatoriosPermitidos();

  const filtrados = permitidos.filter(relatorio => {
    const texto = `${relatorio.titulo} ${relatorio.descricao} ${relatorio.categoria}`.toLowerCase();
    return texto.includes(textoBusca);
  });

  cardsRelatorios.innerHTML = "";

  filtrados.forEach(relatorio => {
    const card = document.createElement("article");
    card.className = "card";

    card.innerHTML = `
      <div class="card-header">
        <div class="card-icon">${relatorio.icone || "📊"}</div>
        <div>
          <div class="card-category">${relatorio.categoria || "Relatório"}</div>
          <h3>${relatorio.titulo}</h3>
        </div>
      </div>
      <p>${relatorio.descricao}</p>
      <button type="button" data-report-id="${relatorio.id}">Abrir relatório</button>
    `;

    card.querySelector("button").addEventListener("click", () => abrirRelatorio(relatorio.id));
    cardsRelatorios.appendChild(card);
  });

  emptyState.style.display = filtrados.length === 0 ? "block" : "none";
}

function abrirRelatorio(idRelatorio) {
  if (!usuarioLogado || !usuarioLogado.relatorios.includes(idRelatorio)) {
    alert("Você não possui acesso a este relatório.");
    return;
  }

  const relatorio = relatorios.find(item => item.id === idRelatorio);

  if (!relatorio) {
    alert("Relatório não encontrado.");
    return;
  }

  if (!relatorio.url || relatorio.url.includes("COLE_AQUI")) {
    alert("O link deste relatório ainda não foi configurado.");
    return;
  }

  reportTitle.innerText = relatorio.titulo;
  powerbiFrame.title = relatorio.titulo;
  powerbiFrame.src = relatorio.url;

  menu.style.display = "none";
  reportArea.style.display = "block";
}

function voltarMenu() {
  reportArea.style.display = "none";
  menu.style.display = "block";
  powerbiFrame.src = "";
}

function carregarSessaoSalva() {
  const logged = localStorage.getItem("rj_logged");
  const savedUser = localStorage.getItem("rj_user");

  if (logged !== "true" || !savedUser) return;

  const user = usuarios.find(item => item.usuario === savedUser);

  if (!user) {
    logout();
    return;
  }

  usuarioLogado = user;
  loginScreen.style.display = "none";
  app.style.display = "block";

  atualizarCabecalhoUsuario();
  montarMenuRelatorios();
}

document.getElementById("btnLogin").addEventListener("click", login);
document.getElementById("btnLogout").addEventListener("click", logout);
document.getElementById("btnBack").addEventListener("click", voltarMenu);

searchReport.addEventListener("input", event => {
  filtroAtual = event.target.value;
  montarMenuRelatorios();
});

document.addEventListener("keydown", event => {
  const loginVisivel = loginScreen.style.display !== "none";
  if (event.key === "Enter" && loginVisivel) login();
});

carregarSessaoSalva();
