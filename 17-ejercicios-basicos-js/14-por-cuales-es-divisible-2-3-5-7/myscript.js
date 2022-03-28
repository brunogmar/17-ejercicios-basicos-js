var n1 = prompt("Escribe un número");
if(n1 % 2 === 0 || n1 % 3 === 0 || n1 % 5 === 0 || n1 % 7 === 0) {
document.write("El número es divisible por:")
    if(n1 % 2 === 0) {
        document.write(" 2");
    }
    if(n1 % 3 === 0) {
        document.write(" 3");
    }
    if(n1 % 5 === 0) {
        document.write(" 5");
    }
    if(n1 % 7 === 0) {
        document.write(" 7");
    }
} else {
    document.write("El número no es divisible por 2, ni por 3, ni por 5, ni por 7")
}

