
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
    if(amount > 1000){
        return amount *0.9
    }
    // }else{
    //     return amount
    // }

    return amount
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
          console.log("Stop");
        case "yellow":
           console.log("Slow down");     
    }
}