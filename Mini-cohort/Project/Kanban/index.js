const { ServerMonitoringMode } = require("mongodb");

const addTaskBtn = document.getElementById("add-task-btn")

const todoBoard = document.getElementById("todo-board")


function attachDragEvent(target){
    target.addEventListener("dragstart",()=>{
        target.classList.add("flying");
    })
    target.addEventListener("dragend",()=>{
        target.classList.remove("flying");
    })
}




addTaskBtn.addEventListener("click",()=>{
    const input = prompt("What is the task?")

    if(!input) return

    const taskCard= document.createElement("p")
    taskCard.classList.add("item")
    taskCard.innerText=input
    taskCard.setAttribute("draggable",true)
    
    attachDragEvent(taskCard)

    todoBoard.appendChild(taskCard)





})


const allBoard = document.querySelectorAll(".board")

const allItems = document.querySelectorAll(".item")

// allItems.forEach(item =>{
//     item.addEventListener("dragstart",()=>{
//         item.classList.add("flying");
//     })
//     item.addEventListener("dragend",()=>{
//         item.classList.remove("flying");
//     })
// })

allItems.forEach(item => attachDragEvent(item))

// allItems.forEach( attachDragEvent)



allBoard.forEach(board =>{
    board.addEventListener('dragover',()=>{
        const flyingElement = document.querySelector(".flying")
        console.log(board,"Kuch to gya");
        
        board.appendChild(flyingElement)
        
    })
})


//card = Drag start
                    // Board- Drag Over
//Card - Drag End


// drag start --> flyingElement
// drag end --> flying ko atta do

//featured
/*
edit task
deletecard
dynamically add baored
remove board
drag sorting
task local storage
Board head show count of task
time on every task


*/