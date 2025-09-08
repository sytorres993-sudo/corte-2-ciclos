function temp(){
dia = prompt("seleccione lunes martes miercoles jueves viernes sabado domingo")
temperatura= parseInt(prompt("Cual fue la temperatura maxima este dia?"))
let suma=0

maxtemp= -Infinity
mintemp= Infinity 
diamax= ""
diamin=""


for(let i=0;i<6;i++){
    let dia = prompt("seleccione lunes martes miercoles jueves viernes sabado domingo")
    
    let temperatura= parseInt(prompt("Cual fue la temperatura maxima este dia? 1-7"))

suma += temperatura


if(temperatura>maxtemp){
    maxtemp=temperatura
    diamax=dia
}

if(temperatura<mintemp){
    mintemp=temperatura
    diamax=dia 
}
}
let promedio =suma/7

document.write("Promedio de la semana: " + promedio.toFixed(2) + "° C");
document.write(" Día más caluroso: " + diamax + " con " + maxtemp + " °C");
document.write(" Día más frío: " + diamin + " con " + mintemp + " °C");
}
temp();