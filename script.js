console.log("Este es el reto de JavaScript");

function numeroMayorCentro(num1, num2, num3) {
    const array1 = [num1, num2, num3];
    console.log(`Los números son: ${array1.join(", ")}`);

    const ordenados = [...array1].sort((a, b) => a - b);
    const menor = ordenados[0];
    const centro = ordenados[1];
    const mayor = ordenados[2];

    console.log(`El número mayor es: ${mayor}, el número del centro es: ${centro}, y el número menor es: ${menor}`);

    // Mostrar en la página
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <p><strong>Números ingresados:</strong> ${array1.join(", ")}</p>
        <p><strong>Mayor:</strong> ${mayor}</p>
        <p><strong>Centro:</strong> ${centro}</p>
        <p><strong>Menor:</strong> ${menor}</p>
    `;
}

// Función para capturar los datos de los inputs
function obtenerYOrdenar() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
    const num3 = parseFloat(document.getElementById("num3").value);

    // Validación
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById("resultado").innerHTML = "<p style='color:red;'>Por favor ingresa los tres números.</p>";
        return;
    }

    numeroMayorCentro(num1, num2, num3);
}
