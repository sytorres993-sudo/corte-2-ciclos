function calcularPromedio() {
   
    let numAsignaturas = parseInt(prompt("Ingrese la cantidad de asignaturas:"));

    if (isNaN(numAsignaturas) || numAsignaturas <= 0) {
        alert("Número de asignaturas inválido");
        return;
    }

    let suma = 0;

    // Ciclo para ingresar cada calificación
    for (let i = 1; i <= numAsignaturas; i++) {
        let calificacion = parseFloat(prompt("Ingrese la calificación de la asignatura " + i + ":"));

        // Validar que la calificación sea un número válido
        if (isNaN(calificacion) || calificacion < 0 || calificacion > 5) { 
            alert("Calificación inválida. Debe estar entre 0 y 5.");
            i--; // repetir el mismo número
            continue;
        }

        suma += calificacion;
    }

    // Calcular el promedio
    let promedio = suma / numAsignaturas;

    // Mostrar el promedio
    alert("El promedio del estudiante es: " + promedio.toFixed(2));
}

// Llamar a la función
calcularPromedio();

//si lee esto profe, aca deje señalado para poder estudiar mejor esto, de aca en adelante estaran asi :p