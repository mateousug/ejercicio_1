/*
Escribe un programa que calcule el costo de una entrega a domicilio basada en el tiempo de entrega (en minutos). Usa un bucle while para simular el avance del repartidor, incrementando el tiempo en 5 minutos por iteración hasta alcanzar un límite de 30 minutos. Usa condicionales para aplicar una tarifa: $0.5 por minuto para los primeros 15 minutos, $0.3 por minuto después. Si el tiempo inicial es 0, muestra un mensaje de error.

Paso a paso para resolver:

Declara variables para el tiempo actual (tiempo, inicializado en 0), el límite (30 minutos) y el costo total (costo, inicializado en 0).
Antes del bucle, usa un condicional if para verificar si tiempo es 0. Si es así, muestra un mensaje como "Error: El tiempo no puede ser cero" y termina el programa.
Usa un bucle while que se ejecute mientras tiempo sea menor que el límite (30 minutos).
Dentro del bucle, incrementa tiempo en 5 minutos.
Usa un condicional if-else para calcular el costo de los 5 minutos actuales: multiplica 5 por $0.5 si tiempo es menor o igual a 15, o por $0.3 si es mayor.
Suma el costo calculado al costo total.
Muestra un mensaje en cada iteración con el tiempo acumulado y el costo acumulado (por ejemplo, "Tiempo: 5 minutos, Costo: $2.5").
Al salir del bucle, muestra el costo total de la entrega.
*/

let tiempo = 0;
let limite = 30;
let costo = 0;

if (tiempo === 0) {
    console.log("Error: El tiempo no puede ser cero");
} else {
    while (tiempo < limite) {
        tiempo+=5;
        if (tiempo <= 30 && tiempo > 15) {
            costo += 2;
        } else if (tiempo <= 15) {
            costo += (5*0.5);
        } else {
            costo += (5*0.3) ;
        }
        console.log(`Tiempo: ${tiempo} m, Costo acumulado: $${costo}`);
    }
    console.log(`Costo total de la entrega: $${costo}`);
}
// Salida:
// Distancia recorrida: 1 km, Costo acumulado: $2
// Distancia recorrida: 2 km, Costo acumulado: $4
// Distancia recorrida: 3 km, Costo acumulado: $6
// Distancia recorrida: 4 km, Costo acumulado: $7.5
// Distancia recorrida: 5 km, Costo acumulado: $9
// Costo total del viaje: $9