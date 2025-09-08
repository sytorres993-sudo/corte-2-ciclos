function ahorroSemanal() {
    let semana = 1;        // contador de semanas
    let total = 0;         // ahorro acumulado

    while (semana <= 4) {  // se repite 4 semanas
        let aporte = parseFloat(prompt("Ingrese el monto ahorrado en la semana " + semana + ":"));

        // validar que no sea NaN o negativo
        if (isNaN(aporte) || aporte < 0) {
            alert("Monto inválido, intenta de nuevo");
            continue; // vuelve a pedir la semana sin avanzar
        }

        total += aporte; // acumula el aporte
        semana++;        // pasa a la siguiente semana
    }

    document.write("El total ahorrado en 4 semanas es: " + total.toLocaleString("es-CO", { style: "currency", currency: "COP" }));
}

ahorroSemanal();