console.log("=== Task 1: Check Even or Odd Number ===");
let num = 7;
if (num % 2 === 0) {
    console.log(`${num} is Even`);
} else {
    console.log(`${num} is Odd`);
}


console.log("=== Task 2: Calculate Area of a Rectangle ===");
function calculateArea(length, width) {
    return length * width;
}
console.log("Area:", calculateArea(10, 5));

console.log("=== Task 3: Count Vowels in a String ===");
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) count++;
    }
    return count;
}
console.log("Vowel count:", countVowels("Hello World"));


console.log("=== Task 4: Multiplication Table ===");
let tableNumber = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
}


console.log("=== Task 5: Reverse an Array using .reverse() ===");
let arr = [1, 2, 3, 4, 5];
arr.reverse();
console.log("Reversed Array:", arr);


console.log("=== Task 6: Find Second Largest Number ===");
function getSecondLargest(numbers) {
    let sorted = Array.from(new Set(numbers)).sort((a, b) => b - a);
    return sorted[1];
}
console.log("Second largest:", getSecondLargest([10, 45, 87, 99, 87, 34]));


console.log("=== Task 7: Calculate Factorial ===");
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log("Factorial of 5:", factorial(5));


console.log("=== Task 8: Merge Two Arrays Without Duplicates ===");
let arr1 = [1, 2, 3, 4];
let arr2 = [3, 4, 5, 6];
let merged = Array.from(new Set([...arr1, ...arr2]));
console.log("Merged Unique Array:", merged);


console.log("=== Task 9: Check Leap Year ===");
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Is 2024 a leap year?", isLeapYear(2024));


console.log("=== Task 10: Sum All Numbers in an Array ===");
let numbers = [10, 20, 30, 40];
let sum = 0;
for (let num of numbers) {
    sum += num;
}
console.log("Total Sum:", sum);


console.log("=== Task 11: Format Currency with Commas ===");
function formatCurrency(amount) {
    return amount.toLocaleString();
}
console.log("Formatted:", formatCurrency(1000000));


console.log("=== Task 12: Generate Random Number (1-100) ===");
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log("Random Number:", randomNumber);


console.log("=== Task 13: Count Word Occurrences in Sentence ===");
function countWordFrequency(sentence, wordToFind) {
    let words = sentence.toLowerCase().split(" ");
    let count = 0;
    for (let word of words) {
        if (word === wordToFind.toLowerCase()) count++;
    }
    return count;
}
console.log("Word count:", countWordFrequency("JavaScript is fun and JavaScript is powerful", "javascript"));


console.log("=== Task 14: Simple Calculator (+, -, *, /) ===");
function calculator(a, b, operator) {
    switch (operator) {
        case "+": return a + b;
        case "-": return a - b;
        case "*": return a * b;
        case "/": return b !== 0 ? a / b : "Cannot divide by zero";
        default: return "Invalid Operator";
    }
}
console.log("Result:", calculator(10, 5, "+"));


console.log("=== Task 15: Remove Falsy Values from Array ===");
function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}
let messyArray = [0, "hello", false, 42, "", null, undefined, NaN, "World"];
console.log("Clean Array:", removeFalsyValues(messyArray));