function agregaFechaAudiencia() {
    var nuevoDiv = document.createElement("div"); nuevoDiv.className = "campo"; 
 
    var nuevoCampo = document.createElement("input"); nuevoCampo.type = "date"; nuevoCampo.name = "nuevoCampo[]"; nuevoCampo.placeholder = "Nuevo Campo"; 
    
     nuevoDiv.appendChild(nuevoCampo); 
     
      document.getElementById("FechaAudiencia").appendChild(nuevoDiv); 
      } 




      function calcularDiasTranscurridos(fechaInicio, fechaFin) 
      { 
      const fecha1 = new Date(fechaInicio); const fecha2 = new Date(fechaFin); 
      
      const diferencia = fecha2 - fecha1; 
      
      const diasTranscurridos = Math.ceil(diferencia / (1000 * 60 * 60 * 24)); 
      return diasTranscurridos; } 
       
       
       function compararFechas() 
       { 
        const fechaInicio = document.getElementById(idFechaInicio).value; 
       
       const fechaFin = document.getElementById("fechaFin").value;
        if (fechaInicio && fechaFin) 
         {
         const dias = calcularDiasTranscurridos(fechaInicio, fechaFin); 
         document.getElementById("resultado").innerText = "Días transcurridos: " + dias;
          } else { 
          document.getElementById("resultado").innerText = "Por favor, seleccione ambas fechas."; 
         } 
         }