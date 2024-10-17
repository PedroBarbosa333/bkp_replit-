// LOCALIZAR ELEMENTOS DO HTML
// CEIAS : EMAIL  / TELEFONE / IDADE / SEXO
const nome = document.getElementById('nome');
const sobrenome = document.getElementById('sobrenome');
const email = document.getElementById('email');
const telafone = document.getElementById('telefone');
const idade = document.getElementById('idade');
const sexo = document.getElementById('sexo');


// CRIAR VARIAVEIS
const novoNome = "Ryan"
const novoSobrenome = "Santos"
const novoEmail = "ryansantos@gmail.com"
const novoTelefone = "(00)000000000"
const novaIdade = "22 anos"
const novoSexo = "Masculino"


// ATRIBUIR VALORES AO HTML COM OS VALORES
// DAS NOSSAS VARIAVEIS
nome.innerText = novoNome
sobrenome.innerText = novoSobrenome
email.innerText = novoEmail
telefone.innerText = novoTelefone
idade.innerText = novaIdade
sexo.innerText = novoSexo

