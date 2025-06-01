function calcularPagoElectricidad() {
    const kilowatts = parseFloat(document.getElementById("kilowatts").value);
    const costoPorKW = 3.5; // valor estimado por kilowatt

    if (isNaN(kilowatts) || kilowatts < 0) {
        document.getElementById("resultado").innerText = "Ingrese un valor válido de kilowatts.";
        return;
    }

    const pago = kilowatts * costoPorKW;
    document.getElementById("resultado").innerText = `El pago total es de $${pago.toFixed(2)} MXN.`;
}