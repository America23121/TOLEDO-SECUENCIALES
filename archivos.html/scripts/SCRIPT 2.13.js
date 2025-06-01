function calcularAhorro(){
    const sueldo = parseFloat(document.getElementById("sueldo").value);
    if(isNaN(sueldo)||sueldo<0){
        document.getElementById("resultado").innerText = "Ingrese un sueldo válido";
        return;
    }
    const ahorroSemanal = (sueldo*0.15);
    const semanasPorMes = 4;
    const mesesPorAño = 12;
    const ahorroAnual = ahorroSemanal * semanasPorMes * mesesPorAño;

    document.getElementById("resultado").innerText =
    `El ahorro anual es de $${ahorroAnual.toFixed(2)} MXN.`;
}