function agregaFechaAudiencia() {
    var nuevoDiv = document.createElement("div"); nuevoDiv.className = "campo"; 
 
    var nuevoCampo = document.createElement("input"); nuevoCampo.type = "date"; nuevoCampo.name = "nuevoCampo[]"; nuevoCampo.placeholder = "Nuevo Campo"; 
    
     nuevoDiv.appendChild(nuevoCampo); 
     
      document.getElementById("FechaAudiencia").appendChild(nuevoDiv); 
      } 

