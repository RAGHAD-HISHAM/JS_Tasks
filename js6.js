// //task1

// let num = [1, 2, 3, 4, 5];

// let square = num.map(number => number * number);
// console.log(square);
 
// //task2

// let num2 = [1, 2, 3, 4, 5,11,14,17,20,24];

// let greaterThanTen = num2.filter((i) => i > 10);
// console.log(greaterThanTen);
 
// //task3
// let str3 = ["raghad","aljammal"]
// str3.forEach(v => console.log(v.toUpperCase()))

// //task4
// let arr = [
//     { Name:"raghad ", secondName : "hesham" , age : "22" },
//     { Name:"rayyan" , secondName : "hesham" , age : "18" },
//     { Name:"kenan" , secondName : "hesham" , age : "7 "}
// ]

// let newArr = arr.map((arr)=> arr.Name );
// console.log(newArr)

// //task5
// let arr5 = [
//     { Name:"raghad ", secondName : "hesham" , age : "22" },
//     { Name:"rayyan" , secondName : "hesham" , age : "18" },
//     { Name:"kenan" , secondName : "hesham" , age : "7 "}
// ]

// let newArr5 = arr5.filter(({age})=> age > 20 );
// console.log(newArr5)

// //task6
// let arr6 = [1,2,3,4,5]
// let sum=0;
// arr6.forEach( i => sum+=i )
// console.log(sum)

//task40
// function hof(func,N) {

//     return function(num) {
//         let result= 0 
//         for ( let i = 0; i < N ; i++)
//          result= func(num)
//   }

// }

// function reapetOperation(fun , times) {
//     return function (number) {
//         let result = number;
//         for (let i  = 1; i <= times; i++) {
//             result = fun(result);
//         }
//         return result;
//     }
// }

// const addTwo = x => x + 2; // original function
// const addTwoFiveTimes = reapetOperation(addTwo,5);

// console.log(addTwoFiveTimes(0));

// console.log(hof(callB,5))


// // Higher Order Function that returns a function
// function createGreeter(greeting) {
//     // Returning a new function
//     return function(name) {
//       console.log(`${greeting}, ${name}!`);
//     };
//   }
// // Creating a greeter function with a specific greeting
// const greetHello = createGreeter("Hello");
// greetHello("John"); // Output: Hello, John!

// // Creating another greeter function with a different greeting
// const greetGoodbye = createGreeter("Goodbye");
// greetGoodbye("Alice"); // Output: Goodbye, Alice!
  
  

































function reapetOperation(fun , times) {
    return function (number) {
        let result = number;
        for (let i  = 1; i <= times; i++) {
            result = fun(result);
        }
        return result;
    }
}

const addTwo = x => x + 2; // original function
const addTwoFiveTimes = reapetOperation(addTwo,5);

console.log(addTwoFiveTimes(0));
  
  
  
  












// let arr =[1,2,3,4,5,6,7,8,9];
// arr.map((element)=>{
//     arr.push(element * 10);
// })
// console.log(arr);


// let arr2 =[1,2,3,4,5,6,7,8,9];
// arr2.map((element)=>{
//    return element * 10;
// })
// console.log(arr);





















