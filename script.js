
function calcularDescuento(precioOriginal, porcentajeDescuento) {
    // Condicional para validar el descuento
    if (porcentajeDescuento < 0 || porcentajeDescuento > 100) {
        return "Porcentaje de descuento inválido. Debe estar entre 0 y 100.";
    }

    let descuento = (precioOriginal * porcentajeDescuento) / 100;
    let precioFinal = precioOriginal - descuento;

    console.log(`Precio original: $${precioOriginal}`);
    console.log(`Descuento aplicado: ${porcentajeDescuento}%`);
    console.log(`Precio final después del descuento: $${precioFinal}`);
    
    return precioFinal;
}

let continuar = true;

while (continuar) {
    let precioOriginal = parseFloat(prompt("Ingresa el precio original:"));
    let porcentajeDescuento = parseFloat(prompt("Ingresa el porcentaje de descuento:"));

    if (isNaN(precioOriginal) || isNaN(porcentajeDescuento)) {
        console.log("Por favor, ingresa valores numéricos válidos.");
    } else {
        calcularDescuento(precioOriginal, porcentajeDescuento);
    }

    let respuesta = prompt("¿Deseas calcular otro descuento? (si/no)").toLowerCase();

    if (respuesta !== "si") {
        continuar = false;
    }
}

console.log("Gracias por usar la calculadora de descuentos.");
