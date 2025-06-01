function calcularPromedio() {
    const e1 = parseFloat(document.getElementById("exam1").value);
    const e2 = parseFloat(document.getElementById("exam2").value);
    const e3 = parseFloat(document.getElementById("exam3").value);

    if ([e1, e2, e3].some(n => isNaN(n) || n < 0 || n > 100)) {
        document.getElementById("resultado").innerText = "Ingrese calificaciones válidas (0 a 100).";
        return;
    }

    const promedio = e1 * 0.25 + e2 * 0.25 + e3 * 0.5;

    document.getElementById("resultado").innerText =
        `El promedio final es: ${promedio.toFixed(2)}`;
}
