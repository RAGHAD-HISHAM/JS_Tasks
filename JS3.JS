// Task 1: sayHello function
function sayHello {
    console.log("Hello, " + name + "!");
}

sayHello('Alice'); 
sayHello('Bob');   



// Task 2: Anonymous function to return the square
const square = function(number) {
    return number ** 2;
};

console.log(square(2));
console.log(square(5)); 





// Task 3: Arrow function to multiply two numbers
const multiply = (a, b) => a * b;

console.log(multiply(2, 3));  
console.log(multiply(4, 5));  

// Task 4: Create an object named car with properties and method
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    getCarInfo: function() {
        return (this.make),(this.model),(this.year);
    }
};

console.log(car.make);        
console.log(car.make , car.model , car.year); 

// Task 5: Create an array named colors and print each element on a new line
const colors = ['Red', 'Green', 'Blue'];

function printColors(arr) {
    arr.forEach(color => console.log(color));
}

printColors(colors);  

// Task 6: Function to get string length
function getStringLength(s) {   
    return s.length;
}

console.log(getStringLength('Hello'));       
console.log(getStringLength('JavaScript'));  


// Task 7: Function to convert string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

console.log(toUpperCase('hello')); 
console.log(toUpperCase('world')); 

// // Task 8: Function to split a string by a delimiter
function splitt(str, del) {
    return str.split(del);
}

console.log(splitt('Hello6World', '6'));          
console.log(splitt('JavaScript is fun', ' '));  



