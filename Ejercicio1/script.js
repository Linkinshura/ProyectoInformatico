let velocidad_i = prompt("Ingrese la velocidad");
let opcion = prompt("1. Metro/Segundo 2.Kilometro/Hora");

if (opcion == 1) {
let velocidad_f = velocidad_i * 3.6;
alert(`la velocidad final es: ${velocidad_f} km por hora`);
}
else if (opcion == 2) {    
alert(`la velocidad final es: ${velocidad_i} km por hora`);
}
else {
    alert("Ingreso una opcion invalida, recargue y vuelva a intentar");
}
/*
let velocidad_i = prompt("Ingresa la velocidad(metro/segundo)");

let velocidad_f = velocidad_i * 3.6;


alert(`la velocidad final es: ${velocidad_f} km por hora`);
*/