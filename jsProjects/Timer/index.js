
function updateClock(){
    const timeElement= document.getElementById("time")
const dateElement= document.getElementById("date")
//console.log(dateElement);

const currentTime= new Date()
const hour = currentTime.getHours() % 12 ||12
          // 0|| 12 
const minutes = currentTime.getMinutes().toString().padStart(2,"0")
// console.log(minutes);

const seconds = currentTime.getSeconds().toString().padStart(2,"0")

const ampm = currentTime.getHours() >= 12 ? "PM" : "AM";


timeElement.textContent= `${hour}:${minutes}: ${seconds}: ${ampm}`
}


setInterval(()=>{
    updateClock()
},1000)

updateClock()