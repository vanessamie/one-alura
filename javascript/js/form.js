//adicionar paciente

var botaoAdicionar = document.querySelector('#adicionar-paciente');



botaoAdicionar.addEventListener('click', function(event) {
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
//extraindo o nome do paciente
    var paciente = obtemPaciente(form);
//cria tr e td do paciente
    var pacienteTr = criaTabela(paciente);

    var erros = validaPaciente(paciente);

    if(erros.length > 0){
        exibeMensagensDeErro(erros);
        return;
    }

    

//adiciona o paciente na tabela
    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);
    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    
    erros.forEach(function(errado){
        var li = document.createElement("li");
        li.textContent = errado;
        ul.appendChild(li);
    });
}

function obtemPaciente(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
//extraindo informações do paciente;
}

function criaTabela(paciente){

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add("paciente");

    var nomeTd = addDados(paciente.nome, "info-nome");
    var pesoTd = addDados(paciente.peso, "info-peso");
    var alturaTd = addDados(paciente.altura, "info-altura");
    var gorduraTd = addDados(paciente.gordura, "info-gordura");
    var imcTd = addDados(paciente.imc, "info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function addDados(dado, classe){
    var td = document.createElement('td');

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0) erros.push("O campo nome não pode estar vazio!");

    if(!validaPeso(paciente.peso))
        erros.push("Peso é inválido");
    
    if(!validaAltura(paciente.altura))
        erros.push("Altura é inválida");

    if(paciente.gordura.length == 0) erros.push("O campo gordura está vazio!");

    return erros;
}

