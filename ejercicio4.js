function login(){

intentos=0
const PASS_CORRECTA = "seguro123"
const USER_CORRECTO = ":p"
acceso= false

do{
    usuario= prompt("Ingrese su nombre de usuario")
    pass= prompt("ingrese su contraseña")

if(usuario===USER_CORRECTO && pass===PASS_CORRECTA){
    document.write("bienvenido")
    acceso=true
}else{
    alert("Datos invalidos")
    intentos++
}

}while (!acceso && intentos<3)
    if(!acceso){
    alert("Varios intentos hechos")
}
}


login();