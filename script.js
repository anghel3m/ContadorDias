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
function calculateDays() {
  const dates = [
    new Date(document.getElementById("date1").value),
    new Date(document.getElementById("date2").value),
    new Date(document.getElementById("date3").value),
    new Date(document.getElementById("date4").value),
    new Date(document.getElementById("date5").value),
    new Date(document.getElementById("date6").value),
  ];
  let totalDays = 0;
  const resultTableBody = document
    .getElementById("resultTable")
    .querySelector("tbody");
  resultTableBody.innerHTML = "";
  for (let i = 0; i < dates.length - 1; i++) {
    const diffTime = Math.abs(dates[i + 1] - dates[i]);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    totalDays += diffDays;
    const row = resultTableBody.insertRow();
    row.insertCell(0).textContent = `Fecha ${i + 1} a Fecha ${i + 2}`;
    row.insertCell(1).textContent = diffDays;
  }
  document.getElementById("totalDays").textContent = totalDays;
}
