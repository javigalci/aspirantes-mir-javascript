function calcularColor(num) {
    let color;
    if (num === 1) {
      color = "black";
    } if (num === 2) { 
      color = "blanco";
    } else if (num === 3) {
      color = "rojo";
    } /*else {
      color = "verde";
    }*/
  
    return "El color es " + color;
  }
 console.log(calcularColor(2))