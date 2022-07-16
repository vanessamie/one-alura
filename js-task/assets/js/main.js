
import btnConclui from "./concluiTarefa.js";
import botaoDeletarTarefa from "./deletaTarefa.js";

const botaoAdicionarTarefa = document.querySelector('[data-form-button]');

    const criarTarefa = (evento)=> {
    evento.preventDefault()
    
    const input = document.querySelector('[data-form-input]')
    const novaTarefa = input.value   
    const lista = document.querySelector('[data-list]')
    const criarLiNovaTarefa = document.createElement('li')
    criarLiNovaTarefa.classList.add('task')

    const conteudo = `<p class="content">${novaTarefa}</p>`
    
    criarLiNovaTarefa.innerHTML = conteudo

    criarLiNovaTarefa.appendChild(btnConclui())
    criarLiNovaTarefa.appendChild(botaoDeletarTarefa())

    lista.appendChild(criarLiNovaTarefa)
 
    input.value = ""
    input.focus()
}

botaoAdicionarTarefa.addEventListener('click', criarTarefa)