const botaoDeletarTarefa = () => {
    const btnDeletar = document.createElement('button')
    btnDeletar.innerText = "Deletar"

    btnDeletar.addEventListener('click', deletarTarefa)
    btnDeletar.classList.toggle('delete-button') 
    return btnDeletar
}

const deletarTarefa = (evento) => {
    const botaoDeletar = evento.target

    const tarefaCompleta = botaoDeletar.parentElement


    tarefaCompleta.remove()

    return botaoDeletar
}

export default botaoDeletarTarefa