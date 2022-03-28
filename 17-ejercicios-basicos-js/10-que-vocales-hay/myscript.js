const frase = prompt("Escribe una frase").toLowerCase();
var cantVocales = frase.match(/[aeiou]/gi);
document.write(cantVocales);