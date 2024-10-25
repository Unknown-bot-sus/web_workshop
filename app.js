const url = "http://localhost:3000/api/v1/todos";
const todoContainer = document.getElementById("todo-container");


async function main() {
    const data = await getTodos();
    console.log(data);
    for (let todo of data) {
        const todoElement = createTodoElement(todo);
        todoContainer.appendChild(todoElement);
    }
}

main();


function createTodoElement(data) {
    const todo = document.createElement("div");
    const titleElement = document.createElement("span");
    titleElement.textContent = data.task;
    const statusElement = document.createElement("span");
    statusElement.textContent = data.completed ? "Completed" : "Not Completed";
    todo.appendChild(titleElement);
    todo.appendChild(statusElement);
    return todo;
}

async function createTodo() {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            task: "New Todo",
            completed: false
        }),
    })

    const todo = await res.json();

    console.log(`Created todo ${JSON.stringify(todo)}`);
}

async function getTodos() {
    const res = await fetch(url, {
        method: "GET",
    });

    const todos = await res.json();

    return todos.todos;
}

async function deleteTodo(id) {
    const res = await fetch(`${url}/${id}`, {
        method: "DELETE",
    })
}

async function updateTodo(id) {
    const res = await fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            completed: true
        }),
    })

    const todo = await res.json();
}

// deleteTodo();
// getTodos();
// updateTodo(43);
// localhost:3000/api/v1/todos
// GET PUT CREATE DELETE