function calcularTiempoVivido() {
    const edad = parseInt(document.getElementById("edad").value);

    if (isNaN(edad) || edad < 0) {
        document.getElementById("resultado").innerText = "Ingrese una edad válida.";
        return;
    }

    const meses = edad * 12;
    const semanas = edad * 52;
    const dias = edad * 365;
    const horas = dias * 24;

    document.getElementById("resultado").innerHTML =
        `Has vivido aproximadamente:<br>` +
        ` ${meses} meses<br>` +
        ` ${semanas} semanas<br>` +
        ` ${dias} días<br>` +
        ` ${horas} horas`;
}