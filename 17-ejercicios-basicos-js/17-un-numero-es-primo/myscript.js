var n1 = prompt("Escribe un número");
var primo = true;
var i;
for(i=2; i<n1/2; i++) {
    if(n1 % i === 0) {
        primo = false;
    }
}
if(primo) {
    document.write("Es primo")
} else {
    document.write("No es primo")
}