function calcularCheque() {
    const dias = parseInt(document.getElementById("dias").value);
    const hotel = parseFloat(document.getElementById("hotel").value);
    const comida = parseFloat(document.getElementById("comida").value);
    const otrosGastosDiarios = 100;

    if (isNaN(dias) || dias <= 0 || isNaN(hotel) || hotel < 0 || isNaN(comida) || comida < 0) {
        document.getElementById("resultado").innerText = "Ingrese valores válidos.";
        return;
    }

    const totalHotel = dias * hotel;
    const totalComida = dias * comida;
    const totalOtros = dias * otrosGastosDiarios;
    const totalCheque = totalHotel + totalComida + totalOtros;

    document.getElementById("resultado").innerHTML =
        `Desglose del cheque:<br>` +
        `Hotel: $${totalHotel.toFixed(2)}<br>` +
        `Comida: $${totalComida.toFixed(2)}<br>` +
        `Otros gastos: $${totalOtros.toFixed(2)}<br>` +
        `<strong>Total: $${totalCheque.toFixed(2)}</strong>`;
}
