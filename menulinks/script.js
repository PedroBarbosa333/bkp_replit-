// IDENTIFICAR ELEMENTOS HTML
const menu = document.querySelector('.menu');
const vermelho = document.querySelector('#vermelho');
const verde = document.querySelector('#verde');
const azul = document.querySelector('#azul');
const amarelo = document.querySelector('#amarelo');
const box = document.querySelector('.box');
const text = document.querySelector('#texto');

// MANIPULAR ESSE ELEMENTOS
vermelho.addEventListener( 'click', function() { 
box.style.backgroundColor = "red"; 
text.style.color = "white";
})
verde.addEventListener( 'click', function() { 
box.style.backgroundColor = "green"; 
text.style.color = "white";
})
azul.addEventListener( 'click', function() { 
box.style.backgroundColor = "blue"; 
text.style.color = "white";
})
amarelo.addEventListener( 'click', function() { 
box.style.backgroundColor = "yellow"; 
text.style.color = "white";
})