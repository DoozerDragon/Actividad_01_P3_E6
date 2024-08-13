document.getElementById('sueldoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const salarioBase = 40000;
    let aumento = 0;
    const aniosAntiguedad = parseFloat(document.getElementById('aniosAntiguedad').value);

    // Determinar el aumento según los años de antigüedad
    if (aniosAntiguedad > 10) {
        aumento = 0.10;
    } else if (aniosAntiguedad > 5) {
        aumento = 0.07;
    } else if (aniosAntiguedad > 3) {
        aumento = 0.05;
    } else {
        aumento = 0.03;
    }

    // Calcular el sueldo final
    const sueldoFinal = salarioBase + (salarioBase * aumento);

    // Mostrar el resultado
    document.getElementById('resultado').textContent = `El sueldo final es: €${sueldoFinal.toFixed(2)}`;
});
