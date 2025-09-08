EJERCICIOS DE CICLOS:
  ejercicio1:
  aqui se le hace una encuesta a 10 clientes para saber su grado de satisfacción
  al final sacando un promedio de este
    descripción:
    se deja de variable los clientes y la suma, en el ciclo del for se pone otra variable "i"
    y que si el cliente es menor o igual a 1 se empieza el ciclo siguiendo con que al terminar
    se suma 1 a este para sacar las respuestas, para evitar numeros negativos o fuera del rango 
    calificativo se usa el if con el cual podemos hacer que los numeros menores a 1 y mayores a 5
    reciban un alert() avisando que se tomara como 0 usando el isNaN para evitar que se ponga 
    otro valor ademas de números, luego al valor suma=0 se le suma las respuestas, estas dividiendose
    en la cantidad de clientes que dejamos como 10 en la variable principal
  ejercicio2:
  sirve para analizar la temperatura de cada día de la semana, sacando el dia mas frio, caliente
  y el promedio de todos estos dias
    descripción:
    se pide la variable de dia y temperatura, se definen las variables de maxima y minima temperatura
    hasta infinito según frio o calor y el dia mayor o menos con string, en el ciclo for se pone
    la variable "i" como menor a 6 desde 0, al sumarle uno cada ciclo termina en 7 ciclos de cada dia
    de la semana, se pregunta 7 veces por esto mismo en el ciclo, se asigna el valor suma, sumandolo
    con la temperatura (respuestas dadas), con los if se define que dia fue más caliente o frio
    y el promedio se saca dejando la suma dividida entre los días
  ejercicio3:
  el programa muestra el dinero acumulado en 4 semanas de a abonos semanales
    descripción:
    se dejan las variables de cada semana y el total, se usa el ciclo while para las semanas dejando
    hasta el 4 para que el ciclo deje ingresar los valores 4 veces segun cada semana
    con el if se puede asegurar que se ingresen numeros y valores validos dando una alerta en caso
    de que no, se le da valor al total con los aportes usando seman++ para pasar a la otra semana
  ejercicio4:
  para pedir informacion para ingresar a una pagina
    descripción:
    se deja la variable de intentos y las constantes de contraseña, usuario y acceso, con el
    ciclo "do"  se nombra lo que se debe hacer que empieza por pedir la información, el if 
    señala si la informacion es correcta con true o false para saber si dejar ingresar o no, en
    caso de que no se van sumando los intentos, en el while que es de cirta forma la condición
    se muestra que si los intentos superan tres salta el mensaje de muchos intentos
  ejercicio5:
  se usa para calcular el promedio de un estudiante
    descripción:
    se pide el numero de asignaturas con el prompt, con el if se asegura que el valor ingresado
    sea valido, sino mandando una alerta, se pone la variable de suma y luego el ciclo for,
    en este se agrega la variable "i" que es 1 y tiene que ser menor o igual al numero de 
    asignaturas puestas en el prompt anterior, luego se agrega i++ para que se sume 1 cada vuelta
    se pide ahora la calificacion el numero de veces que hayan puesto las materias, con el if 
    se asegura un valor valido, poniendo el i-- para anular la respuesta incorrecta y no tener que
    repetir todo desde cero, se asigna valor a la suma segun todas las calificaciones y se divide
    entre la cantidad de materias puestas
  ejercicio6:
  aqui se hace la simulación de un cajero simple
    descripción:
    se dejan las variables, luego en el ciclo do se pone un prompt que te pide el proceso que necesites
    dentro del do los switch para cada caso restando si es para retirar y sumando para ingresar
    dinero teniendo la opcion de revisar el saldo al final dejando el while en el que dice que
    se genera todo eso siempre que la opcion no sea 4=salir
  ejercicio7:
  muestra la cantidad de productos que vendiste
    descripción:
    se agrega el while en el cual se dice que mientras se atrue se ejecutara el primer prompt
    para pedir nombre del producto vendido, luego los if, el primero para terminar el prompt
    si no se pone nada, el segundo para terminar el proceso y dar resultado, el tercero para
    evitar espacios en blanco inecesarios y el ultimo para sumar los productos y generar el total
  ejercicio8:
  pagina para un restaurante, que ayuda a saber cuantas mesas hay disponibles
    descripción:
    se deja la constante que es cantidad de mesas en total, luego mesas disponibles ligado
    al total, con el ciclo for se pone la variable "i" que es 1 y debe ser menos o igual a las mesas
    segun cada vuelta se suma 1, pregunta si la mesa esta reservada se resta al total de mesas disponibles
    si no se deja como mesa disponible, al final se muestra segun los calculos de la variable que mesas 
    estan disponibles
