
/*function saltarLinea() {
        document.write("<br>");    
        document.write("<br>");    
        document.write("<br>");  
        document.write("<hr>");    
        document.write("<br>");
        document.write("<br>");    
        document.write("<br>");  
    }  */
function cerrojo(ac) {
  var pic;
  if (ac == 0) {
    pic = "C:/Users/juano/OneDrive/Escritorio/imgcode/candadOpen.gif"
  } else {
    pic = "C:/Users/juano/OneDrive/Escritorio/imgcode/candadoClose.gif"
  }
  document.getElementById('myImage').src = pic;
}
function encriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_codificada = btoa(palabra);
    document.getElementById("cambio").innerHTML = palabra_codificada;
}
 
function desencriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_descodificada = atob(palabra);
    document.getElementById("cambio").innerHTML = palabra_descodificada;
}

