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

document.addEventListener("DOMContentLoaded", () => {
  carregarComponente("header-container", "components/header.html");
  carregarComponente("footer-container", "components/footer.html");
});