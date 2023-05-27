let outputTexto = document.querySelector(".outputTexto");
let munheco = document.querySelector(".munheco");
let parrafoContenido = document.querySelector(".ParrafoContenido");
let botonEncriptar = document.querySelector(".Encriptador");
let botonDesencriptar = document.querySelector(".Desencriptador");

function encriptador() {
    quitarParrafo();
    let texto = recuperarTexto();
    outputTexto.textContent = encriptar(texto);
}

// encriptador te texto
function encriptar(contenido) {
    let texto = contenido;
    let textoEncriptado = "";

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoEncriptado += "ai";
        } else if(texto[i] == "e") {
            textoEncriptado += "enter";
        } else if(texto[i] == "i") {
            textoEncriptado += "imes";
        } else if(texto[i] == "o") {
            textoEncriptado += "ober";
        } else if(texto[i] == "u") {
            textoEncriptado += "ufat"
        } else {
            textoEncriptado += texto[i];
        }
    }
    
    return textoEncriptado;
}

function desencriptador() {
    quitarParrafo();
    let texto = recuperarTexto();
    outputTexto.textContent = desencriptar(texto);
}

// desencriptador de texto
function desencriptar(contenido) {
    let texto = contenido;
    let textoDesencriptado = "";

    for(let i = 0; i < texto.length; i++) {
        if(texto[i] == "a") {
            textoDesencriptado += "a";
            i ++;
        } else if(texto[i] == "e") {
            textoDesencriptado += "e";
            i +=4;
        } else if(texto[i] == "i") {
            textoDesencriptado += "i";
            i +=3;
        } else if(texto[i] == "o") {
            textoDesencriptado += "o";
            i += 3;
        } else if(texto[i] == "u") {
            textoDesencriptado += "u"
            i +=3;
        } else {
            textoDesencriptado += texto[i];
        }
    }
    
    return textoDesencriptado;
}

function recuperarTexto() {
    let texto = document.querySelector(".inputTexto");
    return texto.value;
}

function quitarParrafo() {
    munheco.classList.add("ocultar");
    parrafoContenido.classList.add("ocultar");
}

// boton de copiado
const botonCopiar = document.querySelector(".Copiar");
botonCopiar.addEventListener("click", copiar = () => {
    let contenido = document.querySelector(".outputTexto").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("zzzzzzzzz");
});



botonEncriptar.onclick = encriptador;
botonDesencriptar.onclick = desencriptador;