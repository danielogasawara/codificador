const sem_resultado = document.querySelector("#sem-resultado");
const com_resultado = document.querySelector("#com-resultado");
const texto_processado = document.querySelector("#texto-processado");
// Apaga o que existe no campo de texto
document.querySelector("#campo-de-texto").value = "";
// Ativa e desativa a camada de resultado
function mostraResultado() {
    sem_resultado.style.display = "none";
    com_resultado.style.display = "flex";
    com_resultado.style.flexDirection = "column";
    com_resultado.style.gap = "32px";
}
function escondeResultado() {
    sem_resultado.style.display = "flex";
    com_resultado.style.display = "none";
}
function aumentaCaixaTexto (caixa_texto) {
    caixa_texto.style.height = "100px";
    caixa_texto.style.height = caixa_texto.scrollHeight + "px";
}
function verificaCaracteres(texto) {
    let caractere;
    for (let i = 0; i < texto.length; i++) {
        caractere = texto.charAt(i);
        if (caractere.match(/[A-ZÀ-ú0-9]/g)){
            document.querySelector("h1").innerText = "Tem coisa errada ai rapaz";
            document.querySelector("h2").innerText = "Verifique o texto para ver se não tem algum caractére inválido.";

            return true;
        }
    }

    return false;
}
function criptografaTexto() {
    let texto = document.querySelector("#campo-de-texto").value;
    if (texto != "") {
        if (verificaCaracteres(texto) === false) {
            mostraResultado();
            let resultado = "";
            for (let i = 0; i < texto.length; i++) {
                caractere = texto.charAt(i);
                switch (caractere) {
                    case "a":
                        resultado += "ai";
                        break;
                    case "e":
                        resultado += "enter";
                        break;
                    case "i":
                        resultado += "imes";
                        break;
                    case "o":
                        resultado += "ober";
                        break;
                    case "u":
                        resultado += "ufat";
                        break;
                    default:
                        resultado += caractere;
                        break;
                }
            }
            texto_processado.innerText = resultado;
        }
        else {
            escondeResultado();
        }  
    }
    else {
        escondeResultado();
        document.querySelector("h1").innerText = "Nenhuma mensagem encontrada";
        document.querySelector("h2").innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}
function descriptografaTexto() {
    let texto = document.querySelector("#campo-de-texto").value;
    if (texto != "") {
        if (verificaCaracteres(texto) === false) {
            mostraResultado();
            let resultado = texto;
            if (resultado.match(/ai/g) || resultado.match(/enter/g) || resultado.match(/imes/g) || resultado.match(/ober/g) || resultado.match(/ufat/g)) {
                resultado = resultado.replace(/ai/g, "a");
                resultado = resultado.replace(/enter/g, "e");
                resultado = resultado.replace(/imes/g, "i");
                resultado = resultado.replace(/ober/g, "o");
                resultado = resultado.replace(/ufat/g, "u")
            }
            texto_processado.innerText = resultado;
        }
    }
}
function copiaTexto() {
    navigator.clipboard.writeText(texto_processado.innerText);
    alert("Texto copiado!");
}