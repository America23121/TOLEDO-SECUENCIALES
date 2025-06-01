function calcularPagoAgua() {
    const metrosCubicos = parseFloat(document.getElementById("metrosCubicos").value);
    const costoPorMetro = 10.5;

    if (isNaN(metrosCubicos) || metrosCubicos < 0) {
        document.getElementById("resultado").innerText = "Ingrese un valor válido de metros cúbicos.";
        return;
    }

    const pago = metrosCubicos * costoPorMetro;
    document.getElementById("resultado").innerText = `El pago total es de $${pago.toFixed(2)} MXN.`;
}



