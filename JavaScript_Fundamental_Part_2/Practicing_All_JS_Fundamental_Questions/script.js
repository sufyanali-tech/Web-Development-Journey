function counter() {

    let count = 0;
    let myName = "Sufyan"
    return function increament() {

        count++;
        return {count,myName}
    }
}

const myCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());