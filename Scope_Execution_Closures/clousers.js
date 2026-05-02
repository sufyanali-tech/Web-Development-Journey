// private counter using closures
function abcd() {

    let a = 0
    
    return function() {

        a++;
        console.log(a);
    }
}

let fnc = abcd()
fnc()
fnc()
fnc()
fnc()
fnc()


let fnc2 = abcd()
fnc2()
fnc2()
fnc2()
fnc2()


// encapsulation in js using clousers

function unknown() {

    let c = 0;

    return function() {

        if(c < 5) {

            c++
            console.log(c);
            
        }
        else {

            console.error("C Value is Exceeded");
            
        }
    }
}

let fnc3 = unknown();
fnc3()
fnc3()
fnc3()
fnc3()
fnc3()
fnc3()

let c = 0 // c value will not be 0 because c is encapulate in function private member 
fnc3()