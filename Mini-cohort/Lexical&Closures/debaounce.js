function createDebouncedVersion(fn,delay){
    let timerId= null

    return function(){
        clearTimeout(timerId)
        timerId=setTimeout(fn,delay)
    }
}

function apiCall(){}

const apiCallDebounce= createDebouncedVersion(apiCall,5*1000)

apiCallDebounce()

//-----------------Throatling---

