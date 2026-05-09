import { inLocalStorage, outLocalStorage } from "./src/func.js"
// import { createNotes } from "./src/view.js"

const input = document.querySelector('[data-input]');
const addBtn = document.querySelector('[data-add-btn]');
const clearBtn = document.querySelector('[data-clear-btn]');
const boxItem = document.querySelector('[data-todo-box]');
const templ = document.querySelector('[data-todo-list]');

let todoList = outLocalStorage();



addBtn.addEventListener('click', () => {
  if (input.value.trim()) {

    let item = {
      text: input.value.trim(),
    }
    todoList.push(item)
    inLocalStorage(todoList)
    input.value = ""
    render()
  }

});

clearBtn.addEventListener('click', () => {
  localStorage.clear();
  todoList.length = 0;
  render()
})

const block = (todo) => {
  const cloneBox = templ.content.cloneNode(true);
  const textItem = cloneBox.querySelector('[data-templ-item]');
  boxItem.append(cloneBox);
  textItem.textContent = todo.text
}

const render = () => {
  boxItem.innerHTML = ""
  if (todoList.length === 0) {
    boxItem.textContent = "Список пустой!"
    return;
  }
  todoList.forEach((todo) => {
    block(todo);
  })
}
render()





