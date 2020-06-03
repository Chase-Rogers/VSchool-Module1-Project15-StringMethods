// 1
const capitalizeAndLowercase = anyString => {
    return anyString.toUpperCase() + anyString.toLowerCase();
} 
console.log('Make a function that will return any given string into all caps followed by the same string all lowercase.')
console.log(capitalizeAndLowercase("Hello"));
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

// 4
const capitalizeAndLowercase2 = anyString => {
    return returnFirstHalf(anyString).toUpperCase() + anyString.slice(findMiddleIndex(anyString)).toLowerCase();
}

console.log('Make a function that takes a string and returns that string where the first half is capitalized, and the second half is lower cased.')
console.log(capitalizeAndLowercase2('Hello'));
console.log(capitalizeAndLowercase2('Hello World'));
console.log('\n')

// 5
const capitalizeStringAfterSpace = (anyString) => {
    const anyStringSplit = anyString.split(' ');
    const capitalized = [];
    for (let i = 0; i < anyStringSplit.length; i++) {
        const firstLetter = anyStringSplit[i][0].toUpperCase();
        const restOfWord = anyStringSplit[i].slice(1);
        capitalized.push(firstLetter.concat(restOfWord));
    }
    return capitalized.join(' ');
}

console.log(capitalizeStringAfterSpace('hey friends! practice practice practice!'));