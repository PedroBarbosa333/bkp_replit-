// # ID ou identificador
// . Class ou class CSS
const comidas = document.querySelector('.comidas');
// Prompt -> pergunta ao usuário (interage)
const comida1 = prompt('Digite sua comida nº 1: ')
// Insere o conteudo do usuario dentro do HTML 
comidas.innerText = comida1

alert("Você gosta de " + comida1)