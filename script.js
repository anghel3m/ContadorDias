function agregaFechaAudiencia() {
  var nuevoDiv = document.createElement("div");
  nuevoDiv.className = "campo";

  var nuevoCampo = document.createElement("input");
  nuevoCampo.type = "date";
  nuevoCampo.name = "nuevoCampo[]";
  nuevoCampo.placeholder = "Nuevo Campo";

  nuevoDiv.appendChild(nuevoCampo);

  document.getElementById("FechaAudiencia").appendChild(nuevoDiv);
}
// 1ra------------------------------------------------------------------
function calcularDiasTranscurridos(fechaInicio, fechaFin) {
  const fecha1 = new Date(fechaInicio);
  const fecha2 = new Date(fechaFin); // Calcula la diferencia en milisegundos
  const diferencia = fecha2 - fecha1; // Convierte la diferencia de milisegundos a días
  const diasTranscurridos = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
  return diasTranscurridos;
}


function procesarFechas(event) {

  event.preventDefault(); // Evita el envío del formulario
  
  const resultadosDiv = document.getElementById("resultados");
  resultadosDiv.innerHTML = ""; // Limpia resultados previos // Obtiene todos los conjuntos de fechas
  const conjuntos = document.querySelectorAll(".conjunto-fechas");
  conjuntos.forEach((conjunto, index) => {
    const fechaInicio = conjunto.querySelector(".fechaInicio").value;
    const fechaFin = conjunto.querySelector(".fechaFin").value;

    const resultadoParrafo2 = document.createElement("tr");
    const resultadoParrafo = document.createElement("td");
    if (fechaInicio && fechaFin) {
      const dias = calcularDiasTranscurridos(fechaInicio, fechaFin);
      resultadoParrafo.innerText = `Conjunto ${
        index + 1
      }: Días transcurridos: ${dias}`;
    } else {
      resultadoParrafo.innerText = `Conjunto ${
        index + 1
      }: Por favor, seleccione ambas fechas.`;
    }
    resultadosDiv.appendChild(resultadoParrafo);
  });
}
