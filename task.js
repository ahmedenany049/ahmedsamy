
//project 1 
function sayHello(theName, theGender) {
    if (theGender === "Male") {
      console.log("Hello Mr " + theName);
    } 
    else if (theGender === "Female") {
      console.log("Hello Miss " + theName);
    } 
    else {
      console.log("Hello " + theName);
    }
}
sayHello("ahmed", "Male");   
sayHello("nada", "Female");  
sayHello("ahmed");   

// project 2 
function calculate(firstNum, secondNum, operation) {
    if (secondNum === undefined) {
      console.log("Second Number Not Found");
    } 
    else if (operation === 'add') {
      console.log(firstNum + secondNum);
    }
     else if (operation === 'subtract') {
      console.log(firstNum - secondNum);
    }
     else if (operation === 'multiply') {
      console.log(firstNum * secondNum);
    }
}
calculate(20); 
calculate(20, 30); 
calculate(20, 30, 'add'); 
calculate(20, 30, 'subtract'); 
calculate(20, 30, 'multiply'); 

//project 3 
function ageInTime(theAge) {
    if (theAge > 100) {
      console.log("Age Out Of Range");
    } 
    else {
      console.log("the year is "+theAge)
      console.log("the month is "+theAge*12);
    }
}
ageInTime(110); // Age Out Of Range
ageInTime(38);  // 456 Months

// project 4
function checkStatus(a, b, c) {
    let name, age, available;
  
    if (typeof a === "string") {
      name = a;
    }
     else if (typeof b === "string") {
      name = b;
    } 
    else if(typeof c === "string"){
      name = c;
    }
  
    if (typeof a === "number") {
      age = a;
    } 
    else if (typeof b === "number") {
      age = b;
    } 
    else if(typeof c === "number"){
      age = c;
    }
  
    if (typeof a === "boolean") {
      available = a;
    } 
    else if (typeof b === "boolean") {
      available = b;
    } 
    else if(typeof c === "boolean"){
      available = c;
    }
  
    if (available) {
      console.log(`Hello ${name}, Your Age Is ${age}, You Are Available For Hire`);
    } 
    else {
      console.log(`Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`);
    }
}

checkStatus("Osama", 38, true);
checkStatus(38, "Osama", true);
checkStatus(true, 38, "Osama");
checkStatus(false, "Osama", 38);


//project 5
function createSelectBox(startYear, endYear) {
    document.write(`<select>`); 
  
    for (let year = startYear; year <= endYear; year++) {
      document.write(`<option value="${year}">${year}</option>`);
    }
  
    document.write(`</select>`); 
}
createSelectBox(2000, 2021);

//project 6
function multiply(...num) {
    let result = 1;
  
    for (let i = 0; i < nums.length; i++) {
      if (typeof num[i] === "number") {
        result *= Math.floor(num[i]); 
      }
    }
  
    console.log(result);
}
  

