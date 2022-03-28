const frase = prompt("Escribe una frase").toLowerCase();
var cantVocales = frase.match(/[aeiou]/gi).length; //encuentra las vocales [aeiou] por el modificador g y no distingue entre mayúsculas y minúsculas por el modificador i
document.write(cantVocales);