window.addEventListener("resize", function () {
  const elemento = document.querySelector(".mudarTexto");
  if (window.innerWidth <= 767) {
    elemento.textContent = "abaixo";
  } else {
    elemento.textContent = "ao lado";
  }
});