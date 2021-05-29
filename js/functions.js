var validar;
function validaIdade(idade){
    if(idade>=18){
        validar = true;
    }else{
        validar = false;
    }
    return validar
}
function button(){
    var mensagem = document.getElementById('agradecimento')
    mensagem.innerHTML= 'Obrigado por clicar'
    console.log(mensagem)
}

function redirecionar(){
    window.open("http://www.facebook.com")
}
var idade = prompt("Qual a sua idade?")
console.log(validaIdade(idade))
