//Alteração do Nome do Título
var titulo = document.querySelector('.titulo');

titulo.textContent = "Aparecida Nutricionista";

//ou 
//var title = document.querySelector(".titulo");
//title.innerHTML = "Vanessa Minha Linda";

//Cálculo do IMC

var pacientes = document.querySelectorAll('.paciente');

for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var peso = paciente.querySelector(".info-peso").textContent;

    var altura = paciente.querySelector(".info-altura").textContent;

    var tdImc = paciente.querySelector('.info-imc');

    var pesoEhValido = validaPeso(peso);

    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido) {
        console.log('Peso inválido');
        pesoEhValido = false;
        tdImc.textContent = 'Peso Inválido!';
        paciente.classList.add('paciente-invalido');
    }

    if(!alturaEhValida){
        console.log('Altura inválida');
        alturaEhValida = false;
        tdImc.textContent = 'Altura Inválida!';
        paciente.classList.add("paciente-invalido");
    }

    if (alturaEhValida && pesoEhValido) {
        var imc = calculaImc(peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc(peso,altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}

function validaPeso(peso){
    if(peso > 0 && peso < 1000) {
        return true;
    }else{
        return false
    }
}

function validaAltura(altura){
    if(altura > 1 && altura <= 3.0) {
        return true;
    }else{
        return false
    }
}

