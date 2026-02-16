// Function Calling Another Function in Js

function cutFruitPieces(fruit) {

    return fruit * 4;
}

function makeFruitJuice(apple, orange) {

    const functionValue1 = cutFruitPieces(apple);
    const functionValue2 = cutFruitPieces(orange);

    const juice = `Juice with ${functionValue1} piece of apple and ${functionValue2} pieces of orange. `;

    return juice
}
const storeValue = makeFruitJuice(2,3);

console.log(storeValue);
