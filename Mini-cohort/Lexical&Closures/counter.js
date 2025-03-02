//i hsould have fn increement 
//on call it should increse 
// return the current count

// let count=0

// function increment(){
//     return count++
// }

// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());


function increment(){
    let count=0;
    return function(){
        count++
        return count;
    }
}

const x= increment();
const y= increment();


// console.log(x()); //1
// console.log(x()); //2
// console.log(x()); //3
// console.log(y()); //1
// console.log(y()); //2
// console.log(x()); //4
// console.log(y()); //3



//------------------closure

function createCounter(stepSize=1, initialValue=0){
    return function(){
        initialValue= initialValue+stepSize
        return initialValue
    }
}

const i1= createCounter(2,0)

// console.log(i1());
// console.log(i1());
// console.log(i1());
// console.log(i1());
