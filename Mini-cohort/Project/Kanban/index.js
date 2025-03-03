const addTaskBtn = document.getElementById("add-task-btn")

const todoBoard = document.getElementById("todo-board")


addTaskBtn.addEventListener("click",()=>{
    const input = prompt("What is the task?")

    if(!input) return

    const taskCard= document.createElement("p")
    taskCard.classList.add("item")
    taskCard.innerText=input
    taskCard.setAttribute("draggable",true)

    todoBoard.appendChild(taskCard)





})


const allBoard = document.querySelectorAll(".board")

const allItems = document.querySelectorAll(".items")

allItems.forEach(item =>{
    item.addEventListener()
})


allBoard.forEach(board =>{
    board.addEventListener('dragover',()=>{
        console.log(board,"Kuch to gya");
        const flyingElement = document.querySelector(".flying")
        
    })
})