// Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

// function add(one,two,three,four,five){
//   sum  = one + two + three + four + five;
//  console.log(sum) ;
// }
// add(5,13,7,21,48);
// -----------------------------------------

// const inputNumber = document.querySelector("#input-number");
//   const checkButton = document.querySelector("#check");

// checkButton.addEventListener("click", checkNumber)
//   function checkNumber(){
//     if(inputNumber.value % 2 === 0){
//       console.log("it is Even");
//     }else{
//       console.log("it is odd");
//     }
//   }

// ---------------------------------------------

// The numbers are num1=129 and num2=251.

// function maxMin(num1=129,num2=251){
//  var maximumNumber = Math.max(num1,num2);
//  console.log(maximumNumber);

// }
// maxMin();

// ---------------------------------------------

// maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

// function maxMin(num1=8,num2=23,num3=17){
//   var highest = Math.min(num1,num2,num3);
//   console.log(highest);

// }

//  maxMin();

// ---------------------------------------------

// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

// Hint: months with 31 days  January, March, May, July, August, October, and December.

// const inputText = document.querySelector("#input-text");
// const checkButton = document.querySelector("#check");
// const message = document.querySelector("#message");
// checkButton.addEventListener("click", checkDays);

// function checkDays() {


//   var inputMonth = inputText.value.toUpperCase();
//   var monthData = ["JANUARY", "MARCH", "MAY", "JULY", "AUGUST", "OCTOBER", "DECEMBER"];
//   for (let i=0; i<monthData.length;i++) {
//     if(monthData[i]===inputMonth) {
// console.log('Working') ;   
//  break;
//     }

//     else{
// console.log('Sorry') ;  
//     }
//   }
// }









//  if (inputMonth === "JANUARY" || inputMonth === "MARCH" || inputMonth === "MAY" || inputMonth === "JULY" || inputMonth === "AUGUST" || inputMonth === "OCTOBER" || inputMonth === "DECEMBER"){
//    message.innerHTML = "It is a month with 31 days !";
//  }else{
//         message.innerHTML = " Sorry! It is not a month with 31 days";

// ---------------------------------------------------------

// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

// Your output should look something like this 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17 .....


// function giveElements() {
//   var numberArr = [];
//   for (let i = 1; i < 101; i++) {
//     numberArr.push(i);
//   }
//   for (let i = 0; i < numberArr.length; i++) {
//     if (numberArr[i] % 3 === 0) {
//       numberArr[i] = "fizz";
//     } else if (numberArr[i] % 5 === 0) {
//       numberArr[i] = "Buzz";

//     }



//   }
// console.log(numberArr);

//   // console.log(typeof numberArr);
// }
// giveElements();

// ----------------------------------------------------

// Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

// function printStars() {
//       let star = "";

//   for (let i = 0; i < 5; i++) {


//     star += "*";
//  console.log(star);
//   }


// }
// printStars();

// --------------------------------------------------

// Write a program to take a number input from user and print multiplication table 12 times for that number.


// const inputNumber = document.querySelector("#input-number");
// const list = document.querySelector("#list");
// const check = document.querySelector("#check");
//   check.addEventListener("click",twelveTime);
// function twelveTime(){
//   var userValue = inputNumber.value;
//   for(let i=1;i<13;i++){
//    calculated = userValue*i;
//     console.log(calculated)

//   }
// }

// ---------------------------------------------------

//  return a fibonacci series


// function makeSeries() {
//   var primaryVariable = 0;
//   var secondaryVariable = 0;
//   console.log(primaryVariable);
//   console.log(secondaryVariable);
//   var counter = 1;
//   // for (let i = primaryVariable + secondaryVariable; i <= 23; i = primaryVariable + secondaryVariable) {
//   //   console.log(i);
//   //   primaryVariable = secondaryVariable;
//   //   secondaryVariable = i;
//   //   counter++;
//   // }
// }
// makeSeries();

// --------------------------------------------------------

// function reverseText(){
//   var userInput = inputText.value;
//   var splitReverse =  userInput.split("").reverse().join("");
//   console.log(splitReverse);
// }
// ---------------------------------------------







// function showFactorial(){
//    var counter = Number(inputText.value);

//   for(let i=counter-1;i>0;i--){
//    counter = counter*i;

//  console.log(counter);
//   }
// }
// showFactorial();

// const names = ['john','Bob','marie','stephen'];
// for(let i=names.length-1; i>=0;i--){
//   console.log(names[i]);
// }

// function checkPrime() {
//   var converted = Number(inputText.value);
//   if (converted) {
//     message.innerText = "It is a Prime Number";
//   } else {
//     message.innerText = " Sorry! It is not  a Prime Number";

//   }
// }

// function checkWeekend() {
//   var days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY'];

//   if (days.includes(inputText.value.toUpperCase())) {
//     console.log('weekday');
//     message.innerHTML = `Hey! ${inputText.value} is a weekday`;
//   } else if (inputText.value.toUpperCase() === 'SUNDAY' || inputText.value.toUpperCase() === 'SATURDAY') {
//     console.log('weekend');
//     message.innerHTML = `Hey! ${inputText.value} is a weekend`;
//   } else {
//     console.log('sorry');
//     message.innerHTML = `Please enter a valid input`;
  //}
  // for (let i = 0; i < days.length; i++) {
  //   if (inputText.value.toUpperCase() === days[i]) {
  //     console.log('weekday');
  //     message.innerHTML = `Hey! ${inputText.value} is a weekday`;
  //     // break;
  //   } else if (inputText.value.toUpperCase() === 'SUNDAY' || inputText.value.toUpperCase() === 'SATURDAY') {
  //           console.log('weekend');

  //     message.innerHTML = `Hey! ${inputText.value} is a weekend`;
  //   } else {
  //           console.log('sorry');

  //     message.innerHTML = `Please enter a valid input`;

  //   }
  // }
// }

// ----------------------------------------------------

// Alphanumeric Checking

// const inputNum = document.querySelector("#input-num");
// const message = document.querySelector("#message");
// const checkBtn = document.querySelector("#check-btn");

// checkBtn.addEventListener("click", checkNumber);

// function checkNumber() {
//   var inputDigit = inputNum.value;
//   var squared = inputDigit ** 2;
//   var squareText = JSON.stringify(squared);
//   var splitted = squareText.split("");
//   console.log(typeof splitted)
//   console.log(splitted);
//   console.log(splitted[1]);
//   if (inputDigit === splitted[1]) {
//     message.innerHTML = `${inputDigit} is an Automorphic Number`;
//   } else {
//     message.innerHTML = `${inputDigit} is not an Automorphic Number`;
//   }
// }

// ------------------------------------------------------

// Showing only titles from fetched data

// const fetchData = document.querySelector("#fetch");

// fetchData.addEventListener("click", showResult);
// var serverUrl = "https://jsonplaceholder.typicode.com/todos";
// function showResult() {
//   console.log("hi");
//   fetch(serverUrl)
//     .then(response => response.json())
//     .then(data => {
//       for (let i = 0; i < data.length; i++) {
//        var newItem = document.createElement('li');
//          newItem.innerText = data[i].title;
//          list.append(newItem)
//       }
//     }
//     )
//     .catch(errorHandler)
// }
// function errorHandler(error) {
//   console.log(error, "it is the error")
// }









