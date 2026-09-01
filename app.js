let usuarioLogado = null; 
let filtroAtual = "";


// ==========================================================
// ELEMENTOS DA PÁGINA
// ==========================================================

const loginScreen =
  document.getElementById("loginScreen");

const app =
  document.getElementById("app");

const errorMessage =
  document.getElementById("errorMessage");

const powerbiFrame =
  document.getElementById("powerbiFrame");

const menu =
  document.getElementById("menu");

const reportArea =
  document.getElementById("reportArea");

const reportTitle =
  document.getElementById("reportTitle");

const cardsRelatorios =
  document.getElementById("cardsRelatorios");

const cardsComercial =
  document.getElementById("cardsComercial");

const cardsPlanejamento =
  document.getElementById("cardsPlanejamento");

const cardsOperacional =
  document.getElementById("cardsOperacional");

const emptyState =
  document.getElementById("emptyState");

const userInfo =
  document.getElementById("userInfo");

const accessChip =
  document.getElementById("accessChip");

const accessChipText =
  document.getElementById("accessChipText");

const searchReport =
  document.getElementById("searchReport");

const btnLogin =
  document.getElementById("btnLogin");

const btnLogout =
  document.getElementById("btnLogout");

const btnBack =
  document.getElementById("btnBack");

const btnFullscreen =
  document.getElementById("btnFullscreen");

const btnFullscreenExit =
  document.getElementById("btnFullscreenExit");


// ==========================================================
// LOGIN
// ==========================================================

function login() {

  const user =
    document
      .getElementById("user")
      .value
      .trim();

  const password =
    document
      .getElementById("password")
      .value
      .trim();


  const validUser =
    usuarios.find(
      item =>
        item.usuario === user &&
        item.senha === password
    );


  if (!validUser) {

    errorMessage.style.display =
      "block";

    return;
  }


  usuarioLogado =
    validUser;


  localStorage.setItem(
    "rj_logged",
    "true"
  );


  localStorage.setItem(
    "rj_user",
    validUser.usuario
  );


  loginScreen.style.display =
    "none";

  app.style.display =
    "block";

  errorMessage.style.display =
    "none";


  atualizarCabecalhoUsuario();

  montarMenuRelatorios();

}


// ==========================================================
// LOGOUT
// ==========================================================

function logout() {

  sairTelaCheiaRelatorio();


  localStorage.removeItem(
    "rj_logged"
  );


  localStorage.removeItem(
    "rj_user"
  );


  usuarioLogado =
    null;


  if (powerbiFrame) {

    powerbiFrame.src =
      "";

  }


  if (searchReport) {

    searchReport.value =
      "";

  }


  filtroAtual =
    "";


  voltarMenu();


  loginScreen.style.display =
    "flex";

  app.style.display =
    "none";

}


// ==========================================================
// CABEÇALHO DO USUÁRIO
// ==========================================================

function atualizarCabecalhoUsuario() {

  if (!usuarioLogado) {
    return;
  }


  if (userInfo) {

    userInfo.innerText =
      `${usuarioLogado.nome} • ${usuarioLogado.perfil}`;

  }


  const total =
    usuarioLogado.relatorios.length;


  if (accessChipText) {

    accessChipText.innerText =
      `${total} relatório${total === 1 ? "" : "s"} ` +
      `liberado${total === 1 ? "" : "s"}`;

  }
  else if (accessChip) {

    accessChip.innerText =
      `${total} relatório${total === 1 ? "" : "s"} ` +
      `liberado${total === 1 ? "" : "s"}`;

  }

}


// ==========================================================
// RELATÓRIOS PERMITIDOS
// ==========================================================

function obterRelatoriosPermitidos() {

  if (!usuarioLogado) {

    return [];

  }


  return relatorios.filter(
    relatorio =>
      usuarioLogado
        .relatorios
        .includes(
          relatorio.id
        )
  );

}


// ==========================================================
// MONTAR MENU DE RELATÓRIOS
// ==========================================================

function montarMenuRelatorios() {

  const textoBusca =
    filtroAtual
      .toLowerCase()
      .trim();


  const permitidos =
    obterRelatoriosPermitidos();


  // ========================================================
  // LIMPA OS CONTAINERS
  // ========================================================

  if (cardsComercial) {

    cardsComercial.innerHTML =
      "";

  }


  if (cardsPlanejamento) {

    cardsPlanejamento.innerHTML =
      "";

  }


  if (cardsOperacional) {

    cardsOperacional.innerHTML =
      "";

  }


  /*
    Compatibilidade com o HTML antigo.
  */

  if (
    cardsRelatorios &&
    cardsRelatorios.classList.contains("cards")
  ) {

    cardsRelatorios.innerHTML =
      "";

  }


  // ========================================================
  // FILTRO
  // ========================================================

  const filtrados =
    permitidos.filter(
      relatorio => {

        const texto =
          `${relatorio.titulo || ""} ` +
          `${relatorio.descricao || ""} ` +
          `${relatorio.categoria || ""}`;

        return texto
          .toLowerCase()
          .includes(
            textoBusca
          );

      }
    );


  // ========================================================
  // IDENTIFICAR SETOR
  // ========================================================

  function obterSetor(relatorio) {

    const categoria =
      String(
        relatorio.categoria || ""
      )
        .trim()
        .toUpperCase();


    if (
      categoria.includes(
        "COMERCIAL"
      )
    ) {

      return "COMERCIAL";

    }


    if (
      categoria.includes(
        "PLANEJAMENTO"
      )
    ) {

      return "PLANEJAMENTO";

    }


    if (
      categoria.includes(
        "OPERACIONAL"
      )
    ) {

      return "OPERACIONAL";

    }


    /*
      Caso exista algum relatório
      sem setor definido, ele será
      colocado em Operacional.
    */

    return "OPERACIONAL";

  }


  // ========================================================
  // CRIAR CARD
  // ========================================================

  function criarCard(relatorio) {

    const card =
      document.createElement(
        "article"
      );


    card.className =
      "card";


    card.dataset.reportId =
      relatorio.id;


    card.dataset.sector =
      obterSetor(
        relatorio
      );


    card.innerHTML = `

      <div class="card-content">

        <div class="card-icon">
          ${relatorio.icone || "📊"}
        </div>


        <div class="card-info">

          <div class="card-category">
            ${relatorio.categoria || "Relatório"}
          </div>


          <h3>
            ${relatorio.titulo || "Relatório"}
          </h3>


          <p>
            ${relatorio.descricao || ""}
          </p>

        </div>


        <button
          class="card-button"
          type="button"
          data-report-id="${relatorio.id}"
        >
          Abrir relatório
          <span class="card-button-icon">
            ↗
          </span>
        </button>

      </div>

    `;


    const botao =
      card.querySelector(
        "button"
      );


    if (botao) {

      botao.addEventListener(
        "click",
        () =>
          abrirRelatorio(
            relatorio.id
          )
      );

    }


    return card;

  }


  // ========================================================
  // DISTRIBUIR RELATÓRIOS
  // ========================================================

  let totalExibidos =
    0;


  filtrados.forEach(
    relatorio => {

      const setor =
        obterSetor(
          relatorio
        );


      const card =
        criarCard(
          relatorio
        );


      let container =
        null;


      switch (setor) {

        case "COMERCIAL":

          container =
            cardsComercial;

          break;


        case "PLANEJAMENTO":

          container =
            cardsPlanejamento;

          break;


        case "OPERACIONAL":

          container =
            cardsOperacional;

          break;


        default:

          container =
            cardsOperacional;

          break;

      }


      if (container) {

        container.appendChild(
          card
        );

        totalExibidos++;

      }

    }
  );


  // ========================================================
  // OCULTAR SETORES SEM RELATÓRIOS
  // ========================================================

  const setores =
    document.querySelectorAll(
      ".sector-section"
    );


  setores.forEach(
    setor => {

      const quantidade =
        setor.querySelectorAll(
          ".card"
        ).length;


      if (quantidade === 0) {

        setor.style.display =
          "none";

      }
      else {

        setor.style.display =
          "";

      }

    }
  );


  // ========================================================
  // ESTADO VAZIO
  // ========================================================

  if (emptyState) {

    emptyState.style.display =
      totalExibidos === 0
        ? "block"
        : "none";

  }

}


// ==========================================================
// ABRIR RELATÓRIO
// ==========================================================

function abrirRelatorio(
  idRelatorio
) {

  if (
    !usuarioLogado ||
    !usuarioLogado
      .relatorios
      .includes(
        idRelatorio
      )
  ) {

    alert(
      "Você não possui acesso a este relatório."
    );

    return;

  }


  const relatorio =
    relatorios.find(
      item =>
        item.id ===
        idRelatorio
    );


  if (!relatorio) {

    alert(
      "Relatório não encontrado."
    );

    return;

  }


  if (
    !relatorio.url ||
    relatorio.url.includes(
      "COLE_AQUI"
    )
  ) {

    alert(
      "O link deste relatório ainda não foi configurado."
    );

    return;

  }


  // ========================================================
  // RELATÓRIO EM NOVA ABA
  // ========================================================

  if (
    relatorio.novaAba ===
    true
  ) {

    window.open(
      relatorio.url,
      "_blank",
      "noopener,noreferrer"
    );

    return;

  }


  // ========================================================
  // RELATÓRIO DENTRO DO PORTAL
  // ========================================================

  reportTitle.innerText =
    relatorio.titulo;


  powerbiFrame.title =
    relatorio.titulo;


  powerbiFrame.src =
    relatorio.url;


  menu.style.display =
    "none";


  reportArea.style.display =
    "block";

}


// ==========================================================
// VOLTAR PARA O MENU
// ==========================================================

function voltarMenu() {

  document.body
    .classList
    .remove(
      "report-fullscreen"
    );


  if (
    document.fullscreenElement &&
    document.exitFullscreen
  ) {

    document
      .exitFullscreen()
      .catch(
        () => {}
      );

  }


  if (reportArea) {

    reportArea.style.display =
      "none";

  }


  if (menu) {

    menu.style.display =
      "block";

  }


  if (powerbiFrame) {

    powerbiFrame.src =
      "";

  }

}


// ==========================================================
// CARREGAR SESSÃO SALVA
// ==========================================================

function carregarSessaoSalva() {

  const logged =
    localStorage.getItem(
      "rj_logged"
    );


  const savedUser =
    localStorage.getItem(
      "rj_user"
    );


  if (
    logged !== "true" ||
    !savedUser
  ) {

    return;

  }


  const user =
    usuarios.find(
      item =>
        item.usuario ===
        savedUser
    );


  if (!user) {

    logout();

    return;

  }


  usuarioLogado =
    user;


  loginScreen.style.display =
    "none";


  app.style.display =
    "block";


  atualizarCabecalhoUsuario();

  montarMenuRelatorios();

}


// ==========================================================
// ATIVAR TELA CHEIA
// ==========================================================

async function ativarTelaCheiaRelatorio() {

  document.body
    .classList
    .add(
      "report-fullscreen"
    );


  /*
    Aguarda o CSS exibir o botão
    antes de calcular sua posição.
  */

  requestAnimationFrame(
    () => {

      carregarPosicaoBotaoFullscreen();

    }
  );


  try {

    if (
      document
        .documentElement
        .requestFullscreen
    ) {

      await document
        .documentElement
        .requestFullscreen();

    }

  }


  catch (erro) {

    console.log(
      "Tela cheia nativa não disponível:",
      erro
    );

  }

}


// ==========================================================
// SAIR DA TELA CHEIA
// ==========================================================

async function sairTelaCheiaRelatorio() {

  document.body
    .classList
    .remove(
      "report-fullscreen"
    );


  try {

    if (
      document.fullscreenElement &&
      document.exitFullscreen
    ) {

      await document
        .exitFullscreen();

    }

  }


  catch (erro) {

    console.log(
      "Não foi possível sair da tela cheia:",
      erro
    );

  }

}


// ==========================================================
// BOTÃO FLUTUANTE ARRASTÁVEL
// ==========================================================

let arrastandoBotao =
  false;

let botaoFoiMovido =
  false;

let posicaoInicialMouseX =
  0;

let posicaoInicialMouseY =
  0;

let offsetBotaoX =
  0;

let offsetBotaoY =
  0;


// ==========================================================
// CARREGAR POSIÇÃO SALVA DO BOTÃO
// ==========================================================

function carregarPosicaoBotaoFullscreen() {

  if (!btnFullscreenExit) {
    return;
  }


  const posicaoSalva =
    localStorage.getItem(
      "rj_fullscreen_button_position"
    );


  /*
    Caso ainda não exista posição salva,
    mantém a posição definida no CSS.
  */

  if (!posicaoSalva) {

    return;

  }


  try {

    const posicao =
      JSON.parse(
        posicaoSalva
      );


    if (
      typeof posicao.x !==
        "number" ||
      typeof posicao.y !==
        "number"
    ) {

      return;

    }


    const larguraBotao =
      btnFullscreenExit
        .offsetWidth ||
      44;


    const alturaBotao =
      btnFullscreenExit
        .offsetHeight ||
      44;


    /*
      Impede que uma posição antiga
      coloque o botão para fora da tela.
    */

    const x =
      Math.max(
        0,
        Math.min(
          posicao.x,
          window.innerWidth -
            larguraBotao
        )
      );


    const y =
      Math.max(
        0,
        Math.min(
          posicao.y,
          window.innerHeight -
            alturaBotao
        )
      );


    btnFullscreenExit.style.left =
      `${x}px`;


    btnFullscreenExit.style.top =
      `${y}px`;


    btnFullscreenExit.style.right =
      "auto";

  }


  catch (erro) {

    console.log(
      "Não foi possível carregar a posição do botão:",
      erro
    );

  }

}


// ==========================================================
// SALVAR POSIÇÃO DO BOTÃO
// ==========================================================

function salvarPosicaoBotaoFullscreen() {

  if (!btnFullscreenExit) {
    return;
  }


  const rect =
    btnFullscreenExit
      .getBoundingClientRect();


  const posicao = {

    x: rect.left,

    y: rect.top

  };


  localStorage.setItem(
    "rj_fullscreen_button_position",
    JSON.stringify(
      posicao
    )
  );

}


// ==========================================================
// INÍCIO DO ARRASTE
// ==========================================================

function iniciarArrasteBotao(
  event
) {

  if (!btnFullscreenExit) {
    return;
  }


  arrastandoBotao =
    true;


  botaoFoiMovido =
    false;


  posicaoInicialMouseX =
    event.clientX;


  posicaoInicialMouseY =
    event.clientY;


  const rect =
    btnFullscreenExit
      .getBoundingClientRect();


  offsetBotaoX =
    event.clientX -
    rect.left;


  offsetBotaoY =
    event.clientY -
    rect.top;


  try {

    btnFullscreenExit
      .setPointerCapture(
        event.pointerId
      );

  }


  catch (_) {}

}


// ==========================================================
// MOVIMENTAÇÃO DO BOTÃO
// ==========================================================

function moverBotaoFullscreen(
  event
) {

  if (
    !arrastandoBotao ||
    !btnFullscreenExit
  ) {

    return;

  }


  const movimentoX =
    Math.abs(
      event.clientX -
      posicaoInicialMouseX
    );


  const movimentoY =
    Math.abs(
      event.clientY -
      posicaoInicialMouseY
    );


  /*
    Só considera arraste depois de alguns
    pixels. Isso evita confundir clique
    normal com movimento.
  */

  if (
    movimentoX > 3 ||
    movimentoY > 3
  ) {

    botaoFoiMovido =
      true;

  }


  if (!botaoFoiMovido) {

    return;

  }


  let novaPosicaoX =
    event.clientX -
    offsetBotaoX;


  let novaPosicaoY =
    event.clientY -
    offsetBotaoY;


  const larguraBotao =
    btnFullscreenExit
      .offsetWidth;


  const alturaBotao =
    btnFullscreenExit
      .offsetHeight;


  /*
    Mantém o botão dentro da tela.
  */

  novaPosicaoX =
    Math.max(
      0,
      Math.min(
        novaPosicaoX,
        window.innerWidth -
          larguraBotao
      )
    );


  novaPosicaoY =
    Math.max(
      0,
      Math.min(
        novaPosicaoY,
        window.innerHeight -
          alturaBotao
      )
    );


  btnFullscreenExit.style.left =
    `${novaPosicaoX}px`;


  btnFullscreenExit.style.top =
    `${novaPosicaoY}px`;


  /*
    Remove a referência de posição
    pelo lado direito.
  */

  btnFullscreenExit.style.right =
    "auto";

}


// ==========================================================
// FINALIZAR ARRASTE
// ==========================================================

function finalizarArrasteBotao(
  event
) {

  if (!arrastandoBotao) {
    return;
  }


  arrastandoBotao =
    false;


  try {

    btnFullscreenExit
      .releasePointerCapture(
        event.pointerId
      );

  }


  catch (_) {}


  if (
    botaoFoiMovido
  ) {

    salvarPosicaoBotaoFullscreen();

  }

}


// ==========================================================
// CLIQUE DO BOTÃO X
// ==========================================================

function cliqueBotaoFullscreenExit(
  event
) {

  /*
    Se acabou de arrastar,
    não sai da tela cheia.
  */

  if (
    botaoFoiMovido
  ) {

    event.preventDefault();

    event.stopPropagation();


    botaoFoiMovido =
      false;


    return;

  }


  sairTelaCheiaRelatorio();

}


// ==========================================================
// EVENTOS DO LOGIN
// ==========================================================

if (btnLogin) {

  btnLogin.addEventListener(
    "click",
    login
  );

}


// ==========================================================
// EVENTO LOGOUT
// ==========================================================

if (btnLogout) {

  btnLogout.addEventListener(
    "click",
    logout
  );

}


// ==========================================================
// EVENTO VOLTAR
// ==========================================================

if (btnBack) {

  btnBack.addEventListener(
    "click",
    voltarMenu
  );

}


// ==========================================================
// EVENTO TELA CHEIA
// ==========================================================

if (btnFullscreen) {

  btnFullscreen.addEventListener(
    "click",
    ativarTelaCheiaRelatorio
  );

}


// ==========================================================
// EVENTOS BOTÃO FLUTUANTE
// ==========================================================

if (btnFullscreenExit) {

  btnFullscreenExit
    .addEventListener(
      "pointerdown",
      iniciarArrasteBotao
    );


  btnFullscreenExit
    .addEventListener(
      "pointermove",
      moverBotaoFullscreen
    );


  btnFullscreenExit
    .addEventListener(
      "pointerup",
      finalizarArrasteBotao
    );


  btnFullscreenExit
    .addEventListener(
      "pointercancel",
      finalizarArrasteBotao
    );


  btnFullscreenExit
    .addEventListener(
      "click",
      cliqueBotaoFullscreenExit
    );

}


// ==========================================================
// PESQUISA
// ==========================================================

if (searchReport) {

  searchReport.addEventListener(
    "input",
    event => {

      filtroAtual =
        event.target.value;


      montarMenuRelatorios();

    }
  );

}


// ==========================================================
// ENTER NO LOGIN
// ==========================================================

document.addEventListener(
  "keydown",
  event => {

    const loginVisivel =
      loginScreen &&
      loginScreen.style.display !==
        "none";


    if (
      event.key === "Enter" &&
      loginVisivel
    ) {

      login();

    }

  }
);


// ==========================================================
// ESC / SAÍDA DA TELA CHEIA
// ==========================================================

document.addEventListener(
  "fullscreenchange",
  () => {

    if (
      !document.fullscreenElement
    ) {

      document.body
        .classList
        .remove(
          "report-fullscreen"
        );

    }

  }
);


// ==========================================================
// REDIMENSIONAMENTO DA TELA
// ==========================================================

window.addEventListener(
  "resize",
  () => {

    /*
      Se a resolução mudar enquanto estiver
      em tela cheia, reposiciona o botão para
      garantir que continue dentro da tela.
    */

    if (
      document.body
        .classList
        .contains(
          "report-fullscreen"
        )
    ) {

      carregarPosicaoBotaoFullscreen();

    }

  }
);


// ==========================================================
// INICIALIZAÇÃO
// ==========================================================

carregarSessaoSalva();
