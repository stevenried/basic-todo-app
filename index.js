const todoInput = document.querySelector('#todo-input')
const addBtn = document.querySelector('#add-button')

todoInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addBtn.click()
  }
})

addBtn.addEventListener('click', (e) => {
  e.preventDefault()

  const item = {
    label: todoInput.value,
    id: crypto.randomUUID(),
    isCompleted: false,
  }

  addItem(item)

  todoInput.value = ''
  todoInput.focus()
})

const items = [
  {
    label: 'Take shirts to dry cleaner',
    id: '1acbd456fec23',
    isCompleted: false,
  },
]

function addItem(item) {
  items.push(item)
  updateTodoList(items)
}

function updateTodoList(todos) {
  const todoList = document.querySelector('#todo-list')
  todoList.innerText = ''
  const listFragment = document.createDocumentFragment()

  todos.forEach((todo) => {
    const itemTemplate = document.querySelector('#item-template')
    const itemClone = itemTemplate.content.cloneNode(true)

    const itemLabel = itemClone.querySelector('label')
    const itemCheckBox = itemClone.querySelector('input[type="checkbox"]')

    itemLabel.innerText = todo.label
    itemLabel.htmlFor = todo.id
    itemCheckBox.id = todo.id

    listFragment.append(itemClone)
  })

  todoList.append(listFragment)
}

updateTodoList(items)
