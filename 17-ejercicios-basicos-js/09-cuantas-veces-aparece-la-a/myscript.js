var frase = prompt("Escriba una frase").toLowerCase();
function contarLetra(letra) {
var contador = 0;
var comparador = letra.toLowerCase();
    for(i=0; i<frase.length; i++) {
        if(frase[i] === comparador) {
            contador++;
        }
    }
    return contador;
}
document.write(contarLetra('a'));