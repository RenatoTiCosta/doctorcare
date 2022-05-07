
window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
  showNavOnScrol()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
} 
function activateMenuAtCurrentSection(section) {
  //    linha alvo
  const targetLine = scrollY + innerHeight / 2

// verificar se a seção passou da linha
// quais dados vou precisar?]

// o topo da seção
const sectionTop = section.offsetTop

// a altura da seção 
const sectionHeight = section.offsetHeight

// o top da seção chegou ou ultrapassou a linha alvo
const sectionTopReachOrPassedTargetline = targetLine >= sectioTop
// linha alvo é maior que o top?

// informações dados de lógica
console.log (
  "O topo da seção chegou ou passou da linha?"
)
// a a seção termina onde?
const sectionEndsAt = sectionTop + sectionHeight

// o final da seção ´passou da linha alvo
const sectionEndPassedTargetline = sectionEndsAt <= targetLine
// o final da seção está menor que a linha alvo?

// informações dados de lógica
console.log (
  "O fundo da seção  passou da linha?", sectionEndPassedTargetline)

  // limites da seção          (verdadeiro (&&))
  const sectionBoundaries = 
  sectionTopReachOrPassedTargetline && 
  !sectionEndPassedTargetline // ! esclamação transforma em falso 

if (sectionBoundaries) {
  console.log ("Estou na HOME")
} 

const sectionId = section.getAtribute(`id`)
//pesquisar dentro da seção home o 
const menuElement = document.querySelector (`.menu a[href*=${sectionId}]`)

menuElement.classList.remove(`active`)
if (sectionBoundaries) {
  menuElement.classList.add{"active"}
}

}

function showNavOnScrol () {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (scrollY > 550) {
  backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.add('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}




//
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(
  `#home,
   #home imag,
   #home .stats,
   #services,
   #services header,
   #serices .cardes,
   #about,
   #about header,
   #about .content`
)
function sayMyName(name) {
  console.log(name)

}
sayMyName("Renato") //