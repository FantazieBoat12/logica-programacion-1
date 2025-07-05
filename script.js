function ordenar() {
    // Obtener los números desde los inputs
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);

    let resultado = document.getElementById("resultado");

    // Validar que los 3 números fueron ingresados
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
        resultado.innerHTML = "Por favor, ingresa los tres números.";
        return;
    }

    // Revisar si los 3 números son iguales
    if (n1 === n2 && n2 === n3) {
        resultado.innerHTML = `Los tres números son iguales: ${n1}`;
        return;
    }

    // Crear un array y ordenarlo
    let numeros = [n1, n2, n3];
    let ordenAsc = [...numeros].sort((a, b) => a - b); // menor a mayor
    let ordenDesc = [...numeros].sort((a, b) => b - a); // mayor a menor

    // Mostrar los resultados
    resultado.innerHTML = `
        Números ingresados: ${numeros.join(", ")}<br>
        Orden de menor a mayor: ${ordenAsc.join(", ")}<br>
        Orden de mayor a menor: ${ordenDesc.join(", ")}<br>
        Menor: ${ordenAsc[0]}<br>
        Centro: ${ordenAsc[1]}<br>
        Mayor: ${ordenAsc[2]}
    `;
    //Mostrar el resultado en la consola
    console.log(`Números ingresados: ${numeros.join(", ")}`);
    console.log(`Orden de menor a mayor: ${ordenAsc.join(", ")}`);
    console.log(`Orden de mayor a menor: ${ordenDesc.join(", ")}`);
    console.log(`Menor: ${ordenAsc[0]}`);
    console.log(`Centro: ${ordenAsc[1]}`);
    console.log(`Mayor: ${ordenAsc[2]}`);

}
