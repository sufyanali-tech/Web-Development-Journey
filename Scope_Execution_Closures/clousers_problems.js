// problem no 1

function secretKeeper(str) {

    return function () {

        console.log(str);
    }
}

const keeper = secretKeeper("Pizze pasand hay mujhay")
keeper()

console.log(keeper.str);

// problem no 2

function makeCounter() {

    let count = 0;

    return {
        increment: () => { count++; console.log(count) },
        decrement: () => { count--; console.log(count) },
        getCount: () => count
    }
}

const anotherFunction = makeCounter()

anotherFunction.increment();
anotherFunction.increment();
anotherFunction.decrement();
anotherFunction.getCount();
