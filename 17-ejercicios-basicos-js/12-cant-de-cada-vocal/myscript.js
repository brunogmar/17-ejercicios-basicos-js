const frase = prompt("Escribe una frase").toLowerCase();
var nA = 0;
var nE = 0;
var nI = 0;
var nO = 0;
var nU = 0;
var i = 0;
for (i = 0; i < frase.length; i++) {
    if (frase[i] === "a") {
        nA += 1;
    } else if (frase[i] === "e") {
        nE += 1;
    } else if (frase[i] === "i") {
        nI += 1;
    } else if (frase[i] === "o") {
        nO += 1;
    } else if (frase[i] === "u") {
        nU += 1;
    }
}
document.write("La frase tiene " + nA + " veces la letra A" + ", " + nE + " veces la letra E" + ", " + nI + " veces la letra I" + ", " + nO + " veces la letra O" + ", " + nU + " veces la letra U");