import cipher from './cipher.js';
window.addEventListener("load", inicio, true);

/*mayusculas automaticas*/
function inicio(){
  document.getElementById("mensaje").addEventListener("keyup", function(){
    mensaje.value = mensaje.value.toUpperCase();
  });}
  document.getElementById("cifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cifrar2(texto, offset);
  });
  document.getElementById("descifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = descifrar(texto, offset);
  });

  /*cifrar*/
  function cifrar(texto, offset){
    let resultado = "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 + 26) % 26;
    if (texto){
      for (let i = 0; i<texto.length; i++){
        if (letras.indexOf(texto[i])!=-1){
          let position = ((letras.indexOf(texto[i])+offset)%26);
          resultado += letras[position];
        }
        else
          resultado += texto[i];
      }
    }
    return resultado;
  }
  /* descifrar */
  function cifrar2 (texto, offset){
    if (!texto)
      return ""
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+offset)%26]);
  }
  function descifrar (texto, offset){
    if (!texto)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-offset)%26]);
  }