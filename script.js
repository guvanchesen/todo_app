const form = document.getElementById('form')
const input = document.getElementById('input')
const todosUL = document.getElementById('tasks')
const todos = JSON.parse(localStorage.getItem('todos'))

if(todos.length > 0) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', (event) => { 
    event.preventDefault();
    addTodo()
})


function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }

        todoEl.innerText = todoText

        let finish_btn = document.createElement("button");
        let remove_btn = document.createElement("button");
        finish_btn.innerHTML = "Completed!";
        remove_btn.innerHTML = "Remove task";
        finish_btn.type = "Submit";
        finish_btn.id = "finish_btn";
        remove_btn.id = "remove_btn";
        remove_btn.type = "Submit";
        

        finish_btn.addEventListener('click', () => {
            todoEl.classList.toggle('completed')
            updateLS()
        }) 

        remove_btn.addEventListener('click', (e) => {
            e.preventDefault()

            todoEl.remove()
            updateLS()
        }) 

        todosUL.appendChild(todoEl)
        todoEl.appendChild(remove_btn)
        todoEl.appendChild(finish_btn)

        input.value = ''

        updateLS()
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
    }
