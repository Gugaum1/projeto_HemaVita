async function carregarComponente(id, arquivo) {
  const elemento = document.getElementById(id);

  if (!elemento) return;

  try {
    const resposta = await fetch(arquivo);
    const conteudo = await resposta.text();
    elemento.innerHTML = conteudo;
  } catch (erro) {
    console.error(`Erro ao carregar ${arquivo}:`, erro);
  }
}

const API_URL = "http://localhost:3000";

async function carregarCampanhas() {
  const container = document.querySelector(".campaign-grid");
  if (!container) return;

  try {
    const res = await fetch(`${API_URL}/campanhas`);
    const dados = await res.json();

    container.innerHTML = "";

    dados.forEach((item) => {
      container.innerHTML += `
        <article class="campaign-card ${item.categoria === "Urgente" ? "urgent" : ""}">
          <span class="badge ${item.categoria === "Urgente" ? "urgent-badge" : ""}">
            ${item.categoria}
          </span>
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
        </article>
      `;
    });
  } catch (erro) {
    console.error("Erro ao carregar campanhas:", erro);
  }
}

async function carregarRequisitos() {
  const container = document.querySelector(".requirements-grid");
  if (!container) return;

  try {
    const res = await fetch(`${API_URL}/requisitos`);
    const dados = await res.json();

    container.innerHTML = "";

    dados.forEach((item) => {
      container.innerHTML += `
        <article class="requirement-card">
          <h3>${item.titulo}</h3>
          <p>${item.descricao}</p>
        </article>
      `;
    });
  } catch (erro) {
    console.error("Erro ao carregar requisitos:", erro);
  }
}

function configurarFormulario() {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nome: document.querySelector("#nome")?.value || "",
      email: document.querySelector("#email")?.value || "",
      telefone: document.querySelector("#telefone")?.value || "",
      tipo: document.querySelector("#tipo")?.value || "",
      mensagem: document.querySelector("#mensagem")?.value || ""
    };

    try {
      const resposta = await fetch(`${API_URL}/contato`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (!resposta.ok) {
        throw new Error("Falha ao enviar formulário.");
      }

      alert("Mensagem enviada com sucesso!");
      form.reset();
    } catch (erro) {
      console.error("Erro ao enviar formulário:", erro);
      alert("Erro ao enviar mensagem.");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("header-container", "components/header.html");
  carregarComponente("footer-container", "components/footer.html");

  carregarCampanhas();
  carregarRequisitos();
  configurarFormulario();
});