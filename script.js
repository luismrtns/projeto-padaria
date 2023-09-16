let mostrar = true
const menuConteudo = document.querySelector('.cabeca')
const menuToggle = menuConteudo.querySelector('.menu-toggle')

menuToggle.addEventListener('click', () => {
  menuConteudo.classList.toggle('on', mostrar) // quando clicar vai mostrar
  mostrar = !mostrar;
})