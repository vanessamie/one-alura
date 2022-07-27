import { carregaTarefa } from "./carregaTarefa.js";
import btnConclui from "./concluiTarefa.js";
import botaoDeletarTarefa from "./deletaTarefa.js";


export const novoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []

    const input = document.querySelector('[data-form-input]')
    const novaTarefa = input.value

    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const horario = data.format('HH:mm')
    const dataFormatada = data.format('DD/MM/YYYY')

    const concluida = false
    
    const dados = {
        novaTarefa,
        dataFormatada,
        horario,
        concluida
    }

    const listaTarefas = [...tarefas, dados]
    
    localStorage.setItem('tarefas', JSON.stringify(listaTarefas))

    input.value = ""
    input.focus()
    carregaTarefa()
}

export const criarTarefa = ({novaTarefa, horario, concluida}, id)=> {
    
    const criarLiNovaTarefa = document.createElement('li')
    
    const conteudo = `<p class="content">${horario} * ${novaTarefa}</p>`
    
    if(concluida) {
        criarLiNovaTarefa.classList.add('done')
    }

    criarLiNovaTarefa.classList.add('task')
    criarLiNovaTarefa.innerHTML = conteudo

    criarLiNovaTarefa.appendChild(btnConclui(carregaTarefa, id))
    criarLiNovaTarefa.appendChild(botaoDeletarTarefa(carregaTarefa, id))

    return criarLiNovaTarefa
}