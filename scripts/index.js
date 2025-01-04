// document.addEventListener('scroll', () => {
//     const elements = document.querySelectorAll('.asideMensagemAnimacao, .asideChamadaAnimacao');
  
//     elements.forEach(element => {
//       const rect = element.getBoundingClientRect();
      
//       const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
      
//       if (isInViewport) {
//         element.classList.add('animated');
      
//       } else {
//         element.classList.remove('animated');      }
//     });
//   });
window.addEventListener("resize", function () {
    const elemento = document.querySelector(".mudarTexto");
    if (window.innerWidth <= 767) {
      elemento.textContent = "abaixo";
    } else {
      elemento.textContent = "ao lado";
    }
  });