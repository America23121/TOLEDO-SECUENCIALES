function calcularPotencia() {
    const R = parseFloat(document.getElementById("resistencia").value);
    const I = parseFloat(document.getElementById("intensidad").value);

    if (isNaN(R) || R < 0 || isNaN(I) || I < 0) {
        document.getElementById("resultado").innerText = "Ingrese valores válidos para resistencia e intensidad.";
        return;
    }
    const V = R * I;          
    const P = V * I;          
    document.getElementById("resultado").innerHTML =
        `Voltaje (V): ${V.toFixed(2)} volts<br>` +
        `Potencia (P): ${P.toFixed(2)} watts`;
}
