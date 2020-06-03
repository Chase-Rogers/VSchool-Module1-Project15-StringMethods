// 1
const capilizeAndLowercase = anyString => {
    return anyString.toUpperCase() + anyString.toLowerCase();
} 
console.log('Make a function that will return any given string into all caps followed by the same string all lowercase.')
console.log(capilizeAndLowercase("Hello"));
console.log('\n')

// 2
const findMiddleIndex = anyString => {
    return Math.floor(anyString.length/2);
}

console.log('Make a function that returns a number half the length, and rounded down. You\'ll need to use Math.floor().')
console.log(findMiddleIndex("Hello"));
console.log(findMiddleIndex("Hello World"));
console.log('\n')

// 3
const returnFirstHalf = anyString => {
    return anyString.slice(0, findMiddleIndex(anyString));
}

console.log('Make a function that uses slice() and the other functions you\'ve written to return the first half of the string')
console.log(returnFirstHalf("Hello"));
console.log(returnFirstHalf("Hello World"));
console.log('\n')

// 