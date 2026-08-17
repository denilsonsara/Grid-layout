// NOVO: elementos do painel de perfil
const botaoPerfil = document.querySelector("#abrir-perfil");
const painelPerfil = document.querySelector("#painel-perfil");

// NOVO: ao clicar na foto do dono do WhatsApp (canto inferior do nav),
// alterna a classe "active" — mesma técnica do .pai.active
botaoPerfil.addEventListener("click", () => {
  painelPerfil.classList.toggle("active");
});
