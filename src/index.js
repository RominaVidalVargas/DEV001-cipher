import cipher from './cipher.js';

/*mayusculas automaticas mensaje 1*/
  let texto = document.getElementById("mensaje").addEventListener("keyup", function(){
    this.value = this.value.toUpperCase();
  });
  document.getElementById("cifrar").addEventListener("click", function(){
    texto = document.getElementById("mensaje").value;
    let offset = document.getElementById("offset").value;
    /*mayusculas automaticas mensaje2*/
    document.getElementById("mensaje2").value = cipher.encode(offset, texto.toUpperCase());
  });
  document.getElementById("descifrar").addEventListener("click", function(){
    let texto = document.getElementById("mensaje").value;
    let offset = document.getElementById("offset").value;
    document.getElementById("mensaje2").value = cipher.decode(offset, texto.toUpperCase());
  });

