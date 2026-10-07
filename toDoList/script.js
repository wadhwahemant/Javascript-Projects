const taskCount= document.querySelector('#taskCount')
const taskInput= document.querySelector('#taskInput')
const addTask= document.querySelector('#addTask')
const taskList = document.querySelector('#taskList')
const remainingTasks = document.querySelector('#remainingTasks')
const clearCompleted = document.querySelector('#clearCompleted')
const emptyState = document.querySelector('#emptyState')
// let x = 0

addTask.addEventListener('click',()=>{
    const listItem = document.createElement('li')
    taskList.appendChild(listItem)
    listItem.innerHTML=taskInput.value
    taskInput.value=''
    emptyState.innerHTML=''

    listItem.addEventListener('click',()=>{
        listItem.classList.toggle('completed')
    })

    remainingTasks.innerHTML = document.querySelectorAll('li').length
    taskCount.innerHTML=document.querySelectorAll('li').length
})
clearCompleted.addEventListener('click',function(){
    const completed = taskList.querySelectorAll('.completed')
    completed.forEach((task)=>
        {task.remove()})
    remainingTasks.innerHTML = document.querySelectorAll('li').length
    taskCount.innerHTML=document.querySelectorAll('li').length

})
taskCount.innerHTML=document.querySelectorAll('li').length
const filter = document.querySelectorAll('.filter')

filter.forEach((button) => {
    button.addEventListener('click', () => {

        const filterType = button.dataset.filter
        const tasks = taskList.querySelectorAll('li')

        tasks.forEach((task) => {

            if (filterType === 'all') {
                task.style.display = 'block'
            }

            else if (filterType === 'active') {
                if (task.classList.contains('completed')) {
                    task.style.display = 'none'
                } else {
                    task.style.display = 'block'
                }
            }

            else if (filterType === 'completed') {
                if (task.classList.contains('completed')) {
                    task.style.display = 'block'
                } else {
                    task.style.display = 'none'
                }
            }

        })
    })
})