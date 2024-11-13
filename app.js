

function checkAge(age) {
    if (age < 18) {
        console.log("You must be 18 or older to log in.");
        return false;
    }
    return true;
}

let items = ["apple", "banana", "cherry"];

function addItem(item) {
    if (item && item.length > 0) {
        items.push(item);
        console.log(item + " has been added to the list.");
    } else {
        console.log("Invalid item.");
    }
}

function calculateAverage(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error("Input must be a non-empty array of numbers.");
    }
    
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

// مثال على الخطأ الشائع: الاستخدام غير الصحيح للمتحولات
let unusedVariable = "This variable is never used";

// مثال على ملاحظة غير مرغوب فيها في الكود
if (true) {
    console.log("This if statement is unnecessary.");
}

function redundantLoop() {
    for (let i = 0; i < 10; i++) {
        // loop does nothing
    }
}

function squareNumbers(numbers) {
    let squaredNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] * numbers[i]);
    }
    return squaredNumbers;
}

