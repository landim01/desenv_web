// Seleção dos elementos
const input = document.getElementById('taskInput');
const addBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Função para adicionar tarefa
function addTask() {
    const taskText = input.value.trim();

    if (taskText !== "") {
        // 1. Criar o elemento <li>
        const li = document.createElement('li');
        
        // 2. Definir o conteúdo (com checkbox opcional)
        li.innerHTML = `
            <span>
                <input type="checkbox" class="complete-check">
                ${taskText}
            </span>
            <small style="color: #ccc;">(clique para excluir)</small>
        `;

        // 3. Adicionar à lista <ul>
        taskList.appendChild(li);

        // 4. Limpar input e focar novamente
        input.value = "";
        input.focus();
    } else {
        alert("Por favor, digite uma tarefa!");
    }
}

// Evento do botão Adicionar
addBtn.addEventListener('click', addTask);

// Evento de teclado (Enter)
input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

/**
 * DELEGAÇÃO DE EVENTOS
 * Adicionamos o evento ao 'taskList' (UL). 
 * Ele escutará cliques em qualquer LI que nascer lá dentro.
 */
taskList.addEventListener('click', (event) => {
    // Se clicou no checkbox, marcamos como concluído
    if (event.target.classList.contains('complete-check')) {
        event.target.parentElement.classList.toggle('completed');
        return; // Retorna para não excluir a tarefa ao marcar o check
    }

    // Se clicou no LI (ou no texto dentro dele), removemos o item
    // O 'closest' garante que pegamos o LI mesmo se clicar no span interno
    const li = event.target.closest('li');
    if (li) {
        li.remove();
    }
});