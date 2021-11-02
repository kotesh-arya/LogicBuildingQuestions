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

const inputText = document.querySelector("#input-text");
const checkButton = document.querySelector("#check");
const message = document.querySelector("#message");
checkButton.addEventListener("click", checkDays);

function checkDays() {


  var inputMonth = inputText.value.toUpperCase();
  var monthData = ["JANUARY", "MARCH", "MAY", "JULY", "AUGUST", "OCTOBER", "DECEMBER"];
  for (let i=0; i<monthData.length;i++) {
    if(monthData[i]===inputMonth) {
console.log('Working') ;   
 break;
    }
   
    else{
console.log('Sorry') ;  
    }
  }
}









  //  if (inputMonth === "JANUARY" || inputMonth === "MARCH" || inputMonth === "MAY" || inputMonth === "JULY" || inputMonth === "AUGUST" || inputMonth === "OCTOBER" || inputMonth === "DECEMBER"){
  //    message.innerHTML = "It is a month with 31 days !";
  //  }else{
  //         message.innerHTML = " Sorry! It is not a month with 31 days";
