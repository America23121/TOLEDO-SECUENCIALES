function calcularCosto() {
    const minutos = parseFloat(document.getElementById("minutos").value);
    const costoPorMinuto = parseFloat(document.getElementById("costoMinuto").value);

    if (isNaN(minutos) || isNaN(costoPorMinuto) || minutos < 0 || costoPorMinuto < 0) {
        document.getElementById("resultado").innerText = "Por favor ingrese valores válidos.";
        return;
    }

    const total = minutos * costoPorMinuto;

    document.getElementById("resultado").innerText =
        `El costo total de la llamada es: $${total.toFixed(2)} MXN`;
}
