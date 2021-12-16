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
//   console.log(squared);
//   console.log(typeof squared);
//   var squareText = JSON.stringify(squared);
//   var splitted = squareText.split("");
//   console.log(splitted);
//    console.log(typeof splitted);
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



// --------------------------------------------------------
//  functions - easy level


// function makePower (a,b){
//   var result = a**b;
//   console.log(result);
// }
// makePower(5,2);

// function getArea(a){
//  var area  = 3*Math.sqrt(3)/2*a*a;
// console.log(area);
// }
// getArea(10);

// function getRoot(a){
//   var rooted = Math.sqrt(a)
//   // console.log(rooted);
//   return rooted;
// }
// console.log(getRoot(9));

// function makeSum(a,b){
// return a*b;
// }
// console.log(makeSum(9,8));

// function showWordNum(a){
//   var splitted = a.split(" ");
//    var  wordLength = splitted.length;
//    console.log(wordLength);
// }
// showWordNum("kotesh is cool mowa bro");
// function showMin(a,b){
//     var result = Math.min(a,b)
//     console.log(result);
// }
// showMin(8,9);

// function findMin(a,b,...chars){
//       var result = Math.min(a,b,chars)

//   console.log(result);
// }
// findMin(2,3,9,8,7,4);


// function giveMax(...items) {
//   var maxItem = items.reduce((main, later) => {
//     return Math.max(main, later);
//   });
//   console.log(maxItem);
// }



// giveMax(1, 2, 93);



//    var items = [1,2,32,3,4,54,4,5,65,66];
//  var maxItem = items.reduce((main, later) => {
//     return Math.max(main, later);
//   })
//    console.log(maxItem);


// equilateral --- all angles are equal
// isoceles --- only two angles are equal
// scalene --- no angles will be equal


// function typeOfTriangle(a,b,c) {

//   if (a + b + c === 180) {
//     console.log(a===b);
//     if (a === b && b === c) {
//       console.log("It is a equilateral triangle");

//     } else if (a === b || a === c) {
//       console.log("It is a isoceles triangle");
//     } else if (a !== b !== c) {
//       console.log("It is a scalene triangle");

//     }
//   }
//   else {
//     console.log("It is not at all a triangle");

//   }


// }

// typeOfTriangle(45,45,90);


// special case ---
// function typeOfTriangle(...angle) {

//   var result = angle.reduce((main, mid, later) => {
//     if (main === mid || main === later) {
//       console.log("It is a isoceles triangle");
//     } else if (main === mid === later) {
//       console.log("It is a equilateral triangle");
//     } else if (main !== mid !== later) {
//       console.log("It is a scalene triangle");

//     } else {
//       console.log("It is not at all a triangle");

//     }
//   }
//   );

//   console.log(angle);
// }



// var main = [1, 2, 3];
// var later = [4, 5, 6];
// var butter = [7, 8, 9];
// var combine = main.concat(later, butter);
// console.log(combine);
// var text = "neoGcamp";
// var result = text[4];
// console.log(result);

// function showLetter(text, digit) {
//   var final = text[digit];
//   console.log(final);
// }
// showLetter("neoGcamp", 4);




//  main.push(5);
//    var main = [];

//    console.log(main);

// var some = [1,2,3];
// console.log(some[1]);

// ---------------------------------------------------------------

// Given two dates, your function should return which one comes before the other.

// Input: minDate('02/05/2021', '24/01/2021') ––> Output: 24/01/2021

// const first = document.querySelector("#first");
// const second = document.querySelector("#second");
// const show = document.querySelector("#show");
// const message = document.querySelector("#message");

// function showEarlierDate() {
//   var main = first.value.split("-");
//   var later = second.value.split("-");
//   console.log(main);
//   console.log(later);

//   if (main[0] > later[0]) {
//     console.log(later.join("/"));
//   } else if (later[0] > main[0]) {
//     console.log(main.join("/"));
//   } else if (main[1] > later[1]) {
//     console.log(later.join("/"));

//   } else if (later[1] > main[1]) {
//     console.log(main.join("/"));

//   } else if (main[2] > later[2]) {
//     console.log(later.join("/"));

//   } else {
//     console.log(main.join("/"));

//   }


// }
// show.addEventListener("click", showEarlierDate);

// ----------------------------------------------------------------

// Write a function which generates a secret code from a given string, by shifting characters of alphabet by N places. Example:
// Input: encodeString("neogcamp", 2) ––> Output: pgqiecor 



// Function for getting the digit place of an alphabet


// function getDigit(n) {
//   let splitted = n.split("");
//   for (let i = 97; i < 123; i++) {
//     if (n === String.fromCharCode(i)) {
//       console.log(i);
//     }
//   }
// }
// getDigit("k");

// main function 





// function encodeString(n) {
//   let str = "";  // initialised a empty string for storing obtained letters
//   for (let i = 0; i < n.length; i++) {  // for loop for getting asciiiCode 
//     let asciiCode = n.charCodeAt(i);

//     // Using asciiCode of each character and processing it by if condition only for handling edze case.

//     if (asciiCode === 121 || asciiCode === 122) {
//       str += String.fromCharCode(asciiCode - 24); // appendig the converted letter obtained from the calculation.
//     } else {
//       str += String.fromCharCode(asciiCode + 2); // appendig the converted letter obtained from the calculation.
//     }

//   }
//   message.innerHTML = str;
// }
// encodeString("neogcamp");

//  console.log(n.charCodeAt(1));

// -------------------------------------------------------------------

// Given a sentence, return a sentence with first letter of all words as capital.
// Example:
// Input: toSentenceCase('we are neoGrammers') ––> Output: We Are NeoGrammers
// ------------------------------------------------------------
// const message = document.querySelector("#message");


// function makeUppercase(sentence) {
// var splitted = sentence.split(" ");
//   // console.log(splitted);
//   let result = " ";
//   for (let i = 0; i < splitted.length; i++) {

//     result += splitted[i][0].toUpperCase() + " ";




//   }

//   message.innerHTML = result;

// }
// makeUppercase("kotesh is cool");
// --------------------------------------------------------------------
function makeUpper(a) {
  let splitted = a.split(" ");
  // message.innerHTML = splitted;
  let mainStr = " ";
  for (let i = 0; i < splitted.length; i++) {
    splitted[i] = splitted[i].split("");
    splitted[i][0] = splitted[i][0].toUpperCase();
    console.log(splitted[i][0]);
    mainStr = splitted[i].join("");
    console.log(mainStr);

  }

  // console.log(mainStr);

}
makeUpper("kotesh is such damn cool");


// splitted[i][0].toUpperCase();

// let str = "kotesh";
//  str = str.split('');
// str[3] = str[3].toUpperCase();
// str = str.join('');
// console.log(str);
