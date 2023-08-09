const tasks = document.querySelectorAll('.list-group-item');
const mensaje= document.getElementById('mensaje')
const form = document.getElementById('form')
let nombre = ''

form.addEventListener('submit', (e) => {
  e.preventDefault();
  nombre = e.target.name.value
})

tasks.forEach(task => {
  task.addEventListener ('click', () => {
    task.classList.toggle('done')
    const input = task.querySelector('input')
    input.checket=!input.checked

    const label = task.querySelector('label')
    const taskTitle = label.innerText

    alertUser(nombre, taskTitle)
  })
})

function alertUser (nombre, taskTitle) {
  alert(`${nombre} terminaste: ${taskTitle}`)

}