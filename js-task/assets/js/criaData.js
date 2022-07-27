import { criarTarefa } from "./criaTarefa.js"

export const criarData = (data) => {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const dataMoment = moment(data, 'DD/MM/YYYY')
    const dataNoTopo = document.createElement('li')
    const conteudo = `<p class="form__data">${dataMoment.format('DD/MM/YYYY')} </p>`

    dataNoTopo.innerHTML = conteudo

    tarefas.forEach(((tarefa, id) => {
        const dia = moment(tarefa.dataFormatada, 'DD/MM/YYYY')
        const diff = dataMoment.diff(dia)

        if(diff === 0) {
            dataNoTopo.appendChild(criarTarefa(tarefa, id))
        }
    }));
    return dataNoTopo
}