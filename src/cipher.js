const cipher = {
  encode:(texto, offset)=>{
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
  
},
decode:(texto, offset)=>{
    if (!texto)
      return "";
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    offset = (offset % 26 - 26) % 26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)-offset)%26]);
  }
  }
  
  export default cipher;
