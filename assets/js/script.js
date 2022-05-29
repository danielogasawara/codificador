let sem_resultado = document.querySelector("#sem-resultado");
let com_resultado = document.querySelector("#com-resultado");
let texto_processado = document.querySelector("#texto-processado");
// Ativa e desativa a camada de resultado
function MostraResultado() {
    sem_resultado.style.display = "none";
    com_resultado.style.display = "flex";
}
function EscondeResultado() {
    sem_resultado.style.display = "flex";
    com_resultado.style.display = "none";
}

function AumentaCaixaTexto (caixa_texto) {
    caixa_texto.style.height = "100px";
    caixa_texto.style.height = caixa_texto.scrollHeight + "px";
}

function VerificaCaracteres(texto) {
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


function CriptografaTexto() {
    let texto = document.querySelector("#campo-de-texto").value;
    if (texto != "") {
        if (VerificaCaracteres(texto) === false) {
            MostraResultado();
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
            document.querySelector("#texto-processado").innerText = resultado;
        }
        else {
            EscondeResultado();
        }  
    }
    else {
        EscondeResultado();
        document.querySelector("h1").innerText = "Nenhuma mensagem encontrada";
        document.querySelector("h2").innerText = "Digite um texto que você deseja criptografar ou descriptografar.";
    }
}

function DescriptografaTexto() {
    let texto = document.querySelector("#campo-de-texto").value;
    if (texto != "") {
        if (VerificaCaracteres(texto) === false) {
            MostraResultado();
            let resultado = "";
            switch (texto) {
                case texto.match(/ai/g):
                    console.log("Indentifiado!");
                    break;
                default:
                    break;
            }
            
        }
    }
}