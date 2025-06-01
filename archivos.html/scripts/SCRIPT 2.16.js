function calcularArea() {
    const lado = parseFloat(document.getElementById("lado").value);

    if (isNaN(lado) || lado < 0) {
        document.getElementById("resultado").innerText = "Ingrese una longitud válida.";
        return;
    }

    const area = lado * lado;

    document.getElementById("resultado").innerText =
        `El área del cuadrado es: ${area.toFixed(2)} unidades cuadradas.`;
}
