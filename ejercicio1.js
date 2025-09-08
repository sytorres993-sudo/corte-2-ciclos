function encuestaSatisfaccion() {
  let suma = 0
  let clientes = 10

  for (let i = 1; i <= clientes; i++) {
    let respuesta = parseInt(prompt("Cliente " + i + ": Califique su satisfacción del 1 al 5"));
    
  
    if (respuesta < 1 || respuesta > 5 || isNaN(respuesta)) {
      alert("Respuesta inválida. Se tomará como 0.");
      respuesta = 0;
    }
    suma += respuesta;
  }


  let promedio = suma / clientes;
  document.write("El promedio de satisfacción de los 10 clientes es: " + promedio.toFixed(2));
}

encuestaSatisfaccion();