// const changeBackgroundColor= function(){
//     document.body.style.background="black"
// }

// changeBackgroundColor()

// const changeBackgroundColorWhite= function(){
//     document.body.style.background="white"
// }

//not dry principle

const changeBackgroundColor= function(color){
    document.body.style.background=color
}

const themeButton = document.getElementById("themeButton")

themeButton.addEventListener("click", ()=>{
    const currentColor = document.body.style.backgroundColor;

    if(!currentColor || currentColor=="white"){
        changeBackgroundColor("black")
        themeButton.innerText="Dark Mode"
    }else{
        changeBackgroundColor("white")
        themeButton.innerText="White Mode"
    }
    
})