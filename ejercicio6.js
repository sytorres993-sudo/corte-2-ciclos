function cajeroAutomatico() {
    let saldo = 1000; // Saldo inicial
    let opcion;

    do {
        // Mostrar menú de opciones
        opcion = prompt(
            "Bienvenido al Cajero Automático" +
            "1. Consultar saldo" +
            "2. Retirar dinero" +
            "3. Depositar dinero" +
            "4. Salir" +
            "Ingrese el número de la opción deseada:"
        );

        switch(opcion) {
            case "1": // Consultar saldo
                alert("Su saldo actual es: $" + saldo.toFixed(2));
                break;
            case "2": // Retirar dinero
                let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));
                if (isNaN(retiro) || retiro <= 0) {
                    alert("Cantidad inválida.");
                } else if (retiro > saldo) {
                    alert("Saldo insuficiente.");
                } else {
                    saldo -= retiro;
                    alert("Retiro exitoso. Su nuevo saldo es: $" + saldo.toFixed(2));
                }
                break;
            case "3": // Depositar dinero
                let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));
                if (isNaN(deposito) || deposito <= 0) {
                    alert("Cantidad inválida.");
                } else {
                    saldo += deposito;
                    alert("Depósito exitoso. Su nuevo saldo es: $" + saldo.toFixed(2));
                }
                break;
            case "4": // Salir
                alert("Gracias por usar el Cajero Automático. ¡Hasta luego!");
                break;
            default:
                alert("Opción inválida. Por favor, ingrese 1, 2, 3 o 4.");
        }

    } while(opcion !== "4");
}

// Llamar a la función
cajeroAutomatico();