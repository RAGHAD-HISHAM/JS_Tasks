console.log('task1')

//task1-1
let cash = 1000;
let currentLiabilities = 500;

let cashFlowRatio = cash / currentLiabilities;

console.log(cashFlowRatio); 

//task1-2
let revenues = 1000;
let expenses = 500;

let netIncome = revenues - expenses;
console.log(netIncome)

//task1-3
let liabilities = 1000;
let equity = 500;

let totalAssets = liabilities + equity;
console.log(totalAssets)

//task1-4
let profit = 1000;
let sales = 500;
 
netIncome = profit * sales;
console.log(netIncome)


//task1-5	Average  numbers: 7, 9, 2 Output: 6
let a = 7;
let b = 9;
let c = 2;

let sum = a+b+c

let Average =sum/3;
console.log(Average);

//task1-6
let price =150;
let discount =30/100

let totalDiscount = price*discount;

console.log(totalDiscount);

let newPrice =price - totalDiscount;
console.log(newPrice);

//task1-7
let age=29;
if ( 18 <age && age< 30) {
        console.log('true')
} else {
        console.log('false')
}
//task1-8

let num1 = 2;
let num2 = 3;
let exponential = num1**num2;
console.log(exponential); 

//task1-9
let number1 = 10;
let number2 = 4;

let remainder = number1 % number2;

console.log(remainder);


console.log('task2')
//task2-1
console.log(typeof(100))
// 100 is a number, so the output type is number 

//task2-2
console.log(typeof(73.9))
// 73.9 is a number, so the output type is number 

//task2-3
console.log(typeof(NaN))
//the NaN means not a number but suppose to be a number so its type is number!

//task2-4
console.log(typeof("Water"))
// "Water" is a sequence of letters , so its type is string.

//task2-5
console.log(typeof(false))
//false and true are boolean values so their types are boolean.

//task2-6
console.log(typeof(9 != 11))
//this is an expression evaluate to true which is a boolean value so its type is boolean.

//task2-7
console.log("Orang" + "e")
//The + operator concatenates the two strings so the result is  orange 

//task2-8
console.log("Orange" - "s")
//The - operator is not defined for strings, so JavaScript tries to convert them to numbers and fails, resulting in NaN.

//task2-9
console.log("4" + "8")
//The + operator concatenates two strings, resulting in "48"

//task2-10
console.log("4" - "8")
//The - operator converts both strings to numbers and then subtracts them, resulting in -4

//task2-11
console.log("name" + 3)
//The + operator converting the number to a string, and added the two string resulting in "name3"

//task2-12
console.log("name" - 3)
//The - operator is not defined for a string and a number, so JavaScript converts the string to NaN and subtracts, resulting in NaN.

//task2-13
console.log(82 * "word")
//Multiplication is not defined for a number and a string, so JavaScript converts the string to NaN, resulting in NaN.

//task2-14
console.log(1 + "hello")
//The + operator converting the number to a string, and added the two string resulting in "1hello"

//task2-15
console.log("hello" + 1)
//The + operator converting the number to a string, and added the two string resulting in "hello1"

//task2-16
console.log(1 + true)
//The + operator converting the boolean true to its numbertic value which is 1 and added the two numbers resulting in 2

//task2-17

console.log("hello" + true)
//The + operator convert the boolean true to a string and then added the two string resulting in "hellotrue"

//task2-18
console.log(typeof (Infinity))
//Infinity is a numeric value representing infinity, so its type is number

//task2-19
console.log(1 == '1')
//this is a boolean resulting in true because the == operator do not checks for data type equality 

//task2-20
console.log(1 === '1')
//The === operator checks for both value and type equality , so 1 (number) is not equal to '1' (string), resulting in false.



console.log('task3')
let greeting = "Welcome to Orange";
let greetingCapital = greeting.toUpperCase()
console.log( greetingCapital)
console.log(greeting.slice(8,11).toUpperCase());
console.log(`${greeting} Jordan`);


console.log('task5')
//string
let s1 = "I am";
let s2 = "raghad";
let s3 = "aljammal";
let s4 = "22";
let s5 = "old";
let s6 = "full";
let s7 = "stack";
let s8 = "developer";
let s9 = "whom love";
let s10 = "reading";

console.log(s1);
console.log(s2);
console.log(s3);
console.log(s4);
console.log(s5);
console.log(s6);
console.log(s7);
console.log(s8);
console.log(s9);
console.log(s10);

//numbers
let n1 = 0;
let n2 = 1;
let n3 = 2;
let n4 = 3;
let n5 = 5;
let n6 = 8;
let n7 = 13;
let n8 = 21;
let n9 = 34;
let n10 =55;

console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
console.log(n6);
console.log(n7);
console.log(n8);
console.log(n9);
console.log(n10);


//boolean
let b1 = 1==1;
let b2 = 7>2;
let b3= false;
let b4 = true;
let b5 = 3<10;
let b6 = "t"==="ty";
let b7 = 5 < 3;
let b8 = 9!=2;
let b9 = "hi"!="Hi";
let b10 =55>3 ;

console.log(b1);
console.log(b2);
console.log(b3);
console.log(b4);
console.log(b5);
console.log(b6);
console.log(b7);
console.log(b8);
console.log(b9);
console.log(b10);


//array
let a1 = [1, 2, 3, 4, 5, 66, 3];
let a2 = ["apple", "banana", "cherry"];
let a3 = [8, "hi", false];
let a4 = [];
let a5 = ["x", "y", "z"];
let a6 = ["alpha", "beta", "gamma"];
let a7 = [87, 4.65 ,2];
let a8 = ["ol","ul"];
let a9 = [123, 55, 4213, 8];
let a10 =["boo", 98, "moo"];

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9);
console.log(a10);



//object
let o1 = { name: "raghad", age: 22 };
let o2 = { brand: "BM", model: "2024" };
let o3 = { city: "AQABA", location: "south of jordan" };
let o4 = {  a: 1, b: 2 };
let o5 = { x: 10, y: 20 };
let o6 = { x: 14, y: 20 };
let o7 = { x: 15, y: 20 };
let o8 = { x: 12, y: 20 };
let o9 = { x: 11, y: 20 };
let o10 = { x: 19, y: 20 };


console.log(o1);
console.log(o2);
console.log(o3);
console.log(o4);
console.log(o5);
console.log(o6);
console.log(o7);
console.log(o8);
console.log(o9);
console.log(o10);



console.log('task7')
let aa=10;
let bb=5

//task7-1
console.log(aa+bb)
console.log(aa-bb)
console.log(aa*bb)
console.log(aa/bb)
console.log(aa%bb)

//task7-2
console.log(aa > bb)
console.log(aa < bb)
console.log(aa == bb)
console.log(aa != bb)
console.log(aa >= bb)
console.log(aa <= bb)

console.log("hi")

//task7-3
let x=true
let y=false
console.log(x && y)
console.log(x || y)
console.log(!x)
console.log(!y)

//task7-4
console.log(aa+=5)
console.log(aa-=5)
console.log(aa*=2)





