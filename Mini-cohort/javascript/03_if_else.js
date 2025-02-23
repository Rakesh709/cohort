
function prepareChai(type){

    //check string and convert to lower cases


    if(type === "Masala Chai"){
        console.log("Adding spiecs to chai ");
        
    }else{
        console.log("Prepaing regular chai");
        
    }
}

prepareChai("Masala Chai")
prepareChai("Ginger Chai")


/* 
eek online store 
bill 1000> discount 10%
else total amount 
*/


function calculateTotal(amount){
    //convert to number 
    // if(amount > 1000){
    //     return amount *0.9
    // }
    // }else{
    //     return amount
    // }

    return amount >100 ? amount *0.9 :amount
    // console.log("raakesh");
    //Unreachable code detected.
    
}

let finalBill = calculateTotal(1200)

//console.log(finalBill);


/*

*/

function trafficLight(color){
    switch(color){
        case "red":
          return "Stop"
        case "yellow":
           return "wait"
        case "green":
            return "go"
        default:
            return "challan"        
    }
}

//console.log(trafficLight("purple"));


function checktruthyValue(value){
    if(value){
        console.log("Truthy");
        
    }else{
        console.log("Falsy");
        
    }
}

checktruthyValue(1) //Truthy
checktruthyValue(0) //Falsy
checktruthyValue("Rakesh") //Truthy
checktruthyValue("") //Falsy
checktruthyValue([]) //Truthy
checktruthyValue({}) //Truthy
checktruthyValue([1,2,3]) //Truthy


//react

// let isloading = false

// return isloading ?() : ()

function login(username, password){
   if(username ==="admin" && password ==="1234"){
    console.log("Login successfull");
    
   } else{
    console.log("Invalid");
    
   }
}

// && --> both true condition
// || --> || alteast one true or 