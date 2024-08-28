const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuñeco = d.querySelector(".result__img");
const loader = d.querySelector(".loader");
const resultadoTitulo = d.querySelector(".result__tittle");
const resultadoTexto = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar =d.querySelector(".result__btn");

const llaves =[
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];


//Funcion para Encriptar
function encriptarmensaje(mensaje){
    let mensajeEncriptado = "";
    for(let i = 0; i <mensaje.length; i++){
        let letra = mensaje[i];
        let encriptada = letra;
        for (let j = 0; j <llaves.length; j++){
            if (letra == llaves [j][0]){
                encriptada = llaves [j][1]; //Reemplaza la letra por su equivalente encriptado
            break; //Termina el bucle cuando se encuentra la correspondencia
            }
        }
        mensajeEncriptado += encriptada
    }
    return mensajeEncriptado;
}
//Funcion para Desencriptar
function desencriptarMensaje(mensaje){
    let mensajeDesencriptado = mensaje;
    for(let i = 0; i < llaves.length; i++){
        let regex = new RegExp(llaves[i][1], 'g');
        mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
    }
    return mensajeDesencriptado;
}
//Ocultar elementos
textArea.addEventListener("input", (e)=>{
    imagenMuñeco.style.display = "none";
    loader.classList.remove("hidden");
    resultadoTitulo.textContent = "Capturando Mensaje";
    resultadoTexto.textContent = "";
});
//Funcion de Boton Encriptar
botonEncriptar.addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeEncriptado = encriptarmensaje(mensaje);
    resultadoTexto.textContent = mensajeEncriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
});
//Funcion de Boton Desencriptar
botonDesencriptar[1].addEventListener("click", (e)=>{
    e.preventDefault();
    let mensaje = textArea.value.toLowerCase();
    let mensajeDesencriptado = desencriptarMensaje(mensaje);
    resultadoTexto.textContent = mensajeDesencriptado;
    botonCopiar.classList.remove("hidden");
    resultadoTitulo.textContent = "El resultado es:";
});
botonCopiar.addEventListener("click", (e)=>{
    let textoCopiado = resultadoTexto.textContent;
    navigator.clipboard.writeText(textoCopiado).then(()=>{
    imagenMuñeco.style.display = "block";
    loader.classList.add("hidden");
    resultadoTitulo.textContent = "El texto se copio:";
    botonCopiar.classList.add("hidden");
    resultadoTexto.textContent = "";
    })
})
