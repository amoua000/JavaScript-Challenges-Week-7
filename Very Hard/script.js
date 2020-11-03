// variables being used 
// var num1, num2, oper;
 var num1 = Number(prompt("Type first number"));
var oper = (prompt("Type an operator"));
var um2 = Number (prompt("Type second number"));

// math functions below 

// this is the additon function 
function add(num1, num2) {
          // var addedTotal = num1 + num2;
          // return addedTotal;
          return num1 + num2; 
}
var resultOne = add(num1,num2); 


// this is the subtract function 
function subtract(num1, num2) {
          // var subtractTotal = subtract(num , num2);
          return num1 - num2;

}
var resultTwo = subtract(num1,num2); 

// this is the mutiply function 
function multiply(num1, num2) {
          // var multiplyTotal = num1 * num2;
          // return multiplyTotal;
          return num1  *  num2; 
}
var resultThree = multiply(num1,num2); 


// this is the divison function
function divison(num1, num2) {
          // var divisonTotal = num1 / num2;
          // return divisonTotal;
          return num1 / num2;
}
var resultFour = divison(num1,num2); 


// conditionals used 

if(oper === "*") {
          // var multiplyTotal = num1 * num2;
          //  alert( num1 + " * " + num2 + " = " + multiplyTotal);
          alert(num1 + " * " + num2 + " = " + resultThree); 
 }else if(oper === "+") {
          //  var addedTotal = num1 + num2;
          //  alert( num1 + " + " + num2 + " = " + addedTotal);
          alert(num1 + " + " + num2 + " = " + resultOne); 

 }else if(oper === "-") {
          // var subtractTotal = num1 - num2;
          // alert( num1 + " - " + num2 + " = ", subtract );
          alert(num1 + " - " + num2 + " = " + resultTwo); 

 }else {
          //  var divisonTotal = num1 / num2;
          //  alert( num1 + " / "  + num2  + " = " + divisonTotal);
          alert(num1 + " / " + num2 + " = " + resultFour); 

 }