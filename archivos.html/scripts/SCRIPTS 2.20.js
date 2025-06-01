function calcularEstancia() {
    const noches = parseInt(document.getElementById("noches").value);
    const costoPorNoche = parseFloat(document.getElementById("costoNoche").value);

    if (isNaN(noches) || isNaN(costoPorNoche) || noches <= 0 || costoPorNoche <= 0) {
        document.getElementById("resultado").innerText = "Por favor, introduce valores válidos.";
        return;
    }

    const total = noches * costoPorNoche;

    document.getElementById("resultado").innerText =
        `Total a pagar por la estancia: $${total.toFixed(2)} MXN`;
}
