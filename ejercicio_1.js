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