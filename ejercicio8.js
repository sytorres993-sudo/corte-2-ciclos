function sistemaReservas() {
    const totalMesas = 5;
    let mesasDisponibles = totalMesas;

    alert("Bienvenido al sistema de reservas del restaurante.");

    // Ciclo para cada mesa
    for (let i = 1; i <= totalMesas; i++) {
        let respuesta = prompt("¿Está reservada la mesa " + i + "? (sí/no)").toLowerCase();

        if (respuesta === "sí" || respuesta === "si") {
            mesasDisponibles--;
            alert("Mesa " + i + " reservada.");
        } else if (respuesta === "no") {
            alert("Mesa " + i + " disponible.");
        } else {
            alert("Respuesta no válida. Se considera como mesa disponible.");
        }
    }

    // Mostrar cuántas mesas quedan disponibles
    alert("Número de mesas disponibles al final del día: " + mesasDisponibles);
}

// Ejecutar función
sistemaReservas();