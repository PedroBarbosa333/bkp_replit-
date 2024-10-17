/**
 * FUNÇÕES SÃO BLOCOS DE CODIGO QUE PODEM SER REUTILIZADOS
 * FUNÇÕES PODEM OU NÃO RECEBER PARAMETROS
 * FUNÇÕES PODEM RETORNAR VALORES OU NÃO
 * FUNÇÕES PODEM SER ANÔNIMAS
 */
// DECLARAÇÃO DE FUNÇÃO 
function dizOla() {
  alert('olá')
}
function olaPessoa(nome) {
  alert('ola, ' + nome)
}
const nome = 'kabrinha'
const sobrenome = 'pecinha'
const idade = '77'

function dadosPessoa() {
  const dados = nome + sobrenome + idade
  console.log(dados)
}
// INVOCAÇÃO DE FUNÇÃO
dizOla()
olaPessoa('nino abravanel')
dadosPessoa()