const addBtn = document.getElementById("add-btn")
const todoInput = document.getElementById("todo-input")
const todoItemContainer = document.getElementById("todo-items-container")


addBtn.addEventListener("click",()=>{
    const value= todoInput.value
    console.log("user entered",value);
    
    const li= document.createElement('li') //<>li</> hawal mai hai abhi
    li.innerText= value //<>{value}</>

    //eek cross button
    const delBtn= document.createElement("button")
    delBtn.innerText="X";

    delBtn.addEventListener("click",function(){
        li.remove();
    })


    li.appendChild(delBtn)
    //abb dom kai ander fit bhi to krna hai 
    todoItemContainer.appendChild(li);
    
    //input ki value ko remove kr do
    todoInput.value=""
})