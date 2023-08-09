const tasks = document.querySelectorAll('.list-group-item');
const message = document.getElementById('message')
const form = document.getElementById('form')
const name = document.getElementById('name')
let nombre = ''

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nombre = e.target.name.value
})

tasks.forEach(task => {
  task.addEventListener ('click', () => {
    task.classList.toggle('done')
    const input = task.querySelector('input')
    input.checked = !input.checked;

    const label = task.querySelector('label')
    const taskTitle = label.innerText

    alertUser(nombre, taskTitle)
  })
})

function alertUser (nombre, taskTitle) {
  alert(`${nombre} terminaste: ${taskTitle}`)
}
