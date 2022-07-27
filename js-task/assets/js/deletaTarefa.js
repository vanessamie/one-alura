const deletarTarefa = (atualiza, id) => {
    const index = id
    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas'))

    tarefasCadastradas.splice(index, 1)
    localStorage.setItem('tarefas', JSON.stringify(tarefasCadastradas))
    atualiza()
    
}

const botaoDeletarTarefa = (atualiza, id) => {
    const btnDeletar = document.createElement('button')
    btnDeletar.classList.add('delete-button')
    btnDeletar.innerText = "Deletar"

    btnDeletar.addEventListener('click', () => deletarTarefa(atualiza, id))
    return btnDeletar
}



export default botaoDeletarTarefa