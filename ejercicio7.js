function controlInventario() {
    let totalProductos = 0; // Contador de productos vendidos
    let producto;

    alert("Bienvenido al sistema de control de inventario. Escriba 'terminar' para finalizar el registro.");

    // Ciclo para registrar productos
    while (true) {
        producto = prompt("Ingrese el nombre del producto vendido:");

        if (producto === null) {
            // Cancelar prompt
            break;
        } else if (producto.toLowerCase() === "terminar") {
            // Finalizar registro
            break;
        } else if (producto.trim() === "") {
            alert("Debe ingresar un nombre de producto válido.");
            continue;
        } else {
            totalProductos++;
            alert("Producto registrado: " + producto);
        }
    }

    // Mostrar resumen al final del día
    alert("Resumen del día: Total de productos vendidos: " + totalProductos);
}

// Ejecutar función
controlInventario();