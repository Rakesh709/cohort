function pataNhi(fn,delay){
    // console.log(args);
    console.log(arguments);
    //TO FIND THE ALL THE ARGUMENT

    let myId;
    return function(){
      myId =  setTimeout(()=>{
            fn()
        },delay)
    }
}

pataNhi("hitesh",2)

//always set the refrence of all timerr function 

