import cipher from './cipher.js';

/*mayusculas automaticas*/
 /*  document.getElementById("mensaje").addEventListener("keyup", function(){
    mensaje.value = mensaje.value.toUpperCase();
  }); */
  document.getElementById("cifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.encode(texto.toUpperCase(), offset);
  });
  document.getElementById("descifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.decode(texto.toUpperCase(), offset);
  });

  /*cifrar*/
  /* descifrar */
  /* function cifrar2 (texto, offset){
    if (!texto)
      return ""
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 + 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+offset)%26]);
  } */