//task1
for (let i = 1; i <= 10; i++) {
    console.log(i);
  }

//task2
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

//task3
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

//task4
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);


//task5
for (let i = 1; i < 10; i += 2) {
    console.log(i);
}

//task6
let age = 27;
if (age > 16) {
    console.log("You are an adult");
}

//task7
let score = 45;
if (score <= 50) {
    console.log("You failed the test");
}

//task8
let name = "John";
if (name === "John") {
    console.log("Hello, John");
}

//task9
let day = "Monday";
if (day !== "Saturday" && day !== "Friday") {
    console.log("It's a weekday");
}

//task10
let num = 4;
if (num % 2 === 0) {
    console.log("The number is even");
}


//task11
let x = 5;
if (x > 0) {
    console.log("x is a positive number");
}


//task12
let y = -5;
if (y < 0) {
    console.log("y is a negative number");
}


//task13
let gpa = 3.5;
if (gpa >= 3.0) {
    console.log("Congratulations, you have a good GPA!");
}


//task14
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(10)); // false
console.log(isPrime(7));  // true



  