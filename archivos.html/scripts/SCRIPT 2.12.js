function calcularPrecioFinal() {
    const precio = parseFloat(document.getElementById("precio").value);

    if (isNaN(precio) || precio < 0) {
        document.getElementById("resultado").innerText = "Ingrese un precio válido.";
        return;
    }

    const descuento = precio * 0.20;
    const precioConDescuento = precio - descuento;
    const iva = precioConDescuento * 0.15;
    const precioFinal = precioConDescuento + iva;

    document.getElementById("resultado").innerHTML =
        `Precio con descuento: $${precioConDescuento.toFixed(2)}<br>` +
        `Precio final con IVA: $${precioFinal.toFixed(2)}`;
}
