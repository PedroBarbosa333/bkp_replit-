//INDENTIFICAR OS ELEMENTOS DOM(ÁRVORE HTML) 
const btnTrocar=document.getElementById('btn-trocar')
const lampada = document. getElementById('lampada')
let baseURL ="https://f5b4ab5-0448-4f48-8522-98cd916f6498-00-ingktw8gj2p4r.worf.replit.dev/"

btnTrocar.addEventListener('click',function() {
 if(lampada.src = "lampada1.png") {
    lampada.src = "lampada2.png"
} else {
   lampada.src = "lampada1.png"
}