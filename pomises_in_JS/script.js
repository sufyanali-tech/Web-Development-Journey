let promise = new Promise(function(val1,val2) {

    setTimeout(() => {
        
        let value = Math.floor(Math.random()*10)

        if(value > 5) val1("Value Resolve with : "+ value)
        else val2("Value Rejected with : "+ value)
    }, 3000);
}) 

promise.then(function(val) {

    console.log(val);
    
}).catch(function(val) {

    console.log(val);
    
})