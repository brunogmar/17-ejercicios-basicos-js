var n1 = prompt("Escribe un número");
var n2 = prompt("Escribe otro número");
var menor;
var i;
if(n1<n2) {
    menor = n1;
} else {
    menor = n2;
}
for(i=0; i<menor; i++) {
    if(n1 % i === 0 && n2 % i === 0) {
        document.write(i, " ");   
     }
}
