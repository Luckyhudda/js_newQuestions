// 01 Write a JavaScript program to check two given numbers and return true if one of the number is 50 or if their sum is 50.
const returnTrue = function(x,y){
 if((x ===50 || y === 50) || (x  + y == 50)){
    return true
 } 
 return false
}
console.log(returnTrue(21,30));
console.log(returnTrue(21,29));
console.log(returnTrue(21,50));



// 02 Write a  #JavaScript program to determine whether a given year is a leap year ?

let givenYear = 2023;
let givenYear2 = 2024;

const leapYear = function(year){
  if((year % 4 === 0 && year % 100 !== 0)|| (year % 400 === 0)){
    return `${year} is a leap year`;
}
return `${year} is not a leap year`;
}
console.log(leapYear(givenYear));
console.log(leapYear(givenYear2));



// 03 Write a #JavaScript program to find which 1st January is a Sunday between 2014 and 2050.
// 04 Write a #JavaScript program to calculate the number of days left until next Christmas.
// 05 Write a #JavaScript program to convert temperatures to and from Celsius and Fahrenheit.
// 06 Write a #JavaScript program to check if two numbers are in the range 40..60 or in the range 70..100 inclusive.

let numA = 55;
let numB = 44;

function rangeOfTwoNumber(num1, num2){
    if((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)){
        return `${num1} & ${num2} are in the range 40...60`
    } else if((num1 >= 70 && num1 <= 100) && (num2 >= 70 && num2 <= 100)){
        return `${num1} & ${num2} are in the range 70...100`
    }else {
        return `${num1} & ${num2} are Out of range`
    }
}
console.log(rangeOfTwoNumber(numA, numB));


// 07 Write a #JavaScript program to check if the last digit of the three given positive integers is the same.


// 09 Write a #JavaScript program to compute the absolute difference between a specified number and 19. Returns triple their absolute difference if the specified number is greater than 19.

let specifiedNum = 122;
let fixedNum = 19;

function diffOfNum(num, fixed){
    if(num < 0){
        return `Please Enter a Positive Number`;
    } else if(num - fixed > fixed){
        let diff = (num - fixed) * 3
        return `Triple their absolute difference is ${diff}`
    } else{
        return `absolute difference is less then ${fixed} `
    }
}
console.log(diffOfNum(specifiedNum, fixedNum));

// 10 Write a #JavaScript program to check a given integer is within 20 of 100 or 400

// 11  Write a #JavaScript program to check from two given integers, if one is positive and one is negative.

let intONe = 22;
let intTwo = -23;

function checkBoth(num1, num2){
    if(num1> 0 && num2 > 0){
        return `Number ${num1} & ${num2} are positive`;
    } else if (num1< 0 && num2 < 0){
        return `Number ${num1} & ${num2} are negative`;

    }else {
        let a = num1 > 0 ? 'positive' : 'negative';
        let b = num2 > 0 ? 'positive' : 'negative';

        return `${num1} is a ${a} Number & ${num2} is a ${b} Number`
    }
}
console.log(checkBoth(intONe, intTwo));

 // 12 Write a #JavaScript program to create a new string adding "Py" in front of a given string. If the given string begins with "Py" then return the original string.

let firstStr = "pysic";

function frontStr(str){
     if(str[0] ==='p' && str[1] === 'y'){
        return str
     }else{
        return 'py' + str
     }
}
console.log(frontStr(firstStr));

// // 13 Write a #JavaScript program to remove a character at the specified position of a given string and return the new string.

// const str = 'my name is lucky hudda';

// const removeChr = function(){
  

// }
// // console.log(removeChr())



// 14  Write a #JavaScript program to create a new string from a given string changing the position of the first and last characters. The string length must be greater than or equal to 2

let charStr = 'f';

function ReplaceChar(str){
  if(str.length < 2){
    return `Plese provide a valid String`
  } else{
     return ` ...Loading`
  }
}
console.log(ReplaceChar(charStr));

// // 15 Write a #JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.

let givnStr = 'LuckyHudda';

function addInBothSide(str){
  return str[0] + str + str[0]
}
console.log(addInBothSide(givnStr));

// 16 Write a #JavaScript program to check if a given positive number is a multiple of 3 or a multiple of 7.

let number = 9;
let number2 = 19;

const trueMultiple = function(num){
 if(num > 0){
    if(num % 3 === 0 || num % 7=== 0){
        return true 
    }
    return false
 }
 else return `Please provide a positive number`
}
console.log(trueMultiple(number))
console.log(trueMultiple(number2))



// // 17 Write a #JavaScript program to create a new string from a given string taking the last 3 characters and adding at both the front and back. The string length must be 3 or more.

let mainStr = 'lucky';

function bothSideResult(str){
    if(str.length < 3){
        return `Please provide a valid "String" with length of 3+`
    } else{
        let a = str[str.length -3] + str[str.length -2] + str[str.length -1]
        return a + str + a
    }
}
console.log(bothSideResult(mainStr));


// 18 Write a #JavaScript program to check if a string starts with 'Java' and false otherwise.

let strJava = 'JavaScript is best programming language';
let sWith = 'Java Script' 
let sWith2 = 'file' 

const startJs = function(str , match){
if((str[0] === 'j' || str[0] === 'J') &&  (str[1] === 'a' || str[1] === 'A') && (str[2] === 'v' || str[2] === 'V') && (str[3] === 'a' || str[3] === 'A')){
    return true;
} else{
    return false
}
}
console.log(startJs(strJava))
console.log(startJs(sWith2))


// // => when we use both arguments & in-Build method
// const startJs1 = function(str , match){
//     return str.startsWith(match) 
//     }
//     console.log(startJs1(strJava, sWith))
//     console.log(startJs1(strJava, sWith2))


// // 19 Write a #JavaScript program to check if two given integer values are in the range 50..99 (inclusive). Return true if either of them is in the said range.

let valueONe = 93;
let valueTwo = 5;

function rightRange(num1, num2){    
    if((num1 > 50 && num1 < 99) || (num2 > 50 && num2 < 99)){
        return true
    } else{
         return false;
    }
}
console.log(rightRange(valueONe, valueTwo));

// // 20 Write a #JavaScript program to check if a string "Script" presents at the 5th (index 4) position in a given string, if "Script" presents in the string return the string without "Script" otherwise return the original one.




// 21 Write a #JavaScript program to find the largest of three given integers.

let oneInt = 134;
let secInt = 44;
let thInt = 233;

const largInt = function(one, two, three){
  return   one > two ? ( one > three ? one : three) : (two > three ? two : three);
}
console.log(largInt(oneInt, secInt, thInt))
console.log(largInt(111,231,31))
console.log(largInt(11,-321,1331))



// 22 Write a #JavaScript program to find a value that is nearest to 100 from two different given integer values.

let value1 = 44;
let value2 = 45;

const nearestValue = function(v1, v2){
    let finalone = 100 - v1;
    let finalTwo = 100 - v2;
    if(finalone >= 0 && finalTwo >= 0){
        if(finalone > finalTwo){
            return `Nearest value is ${v2}`
        }
        return `Nearest value is ${v1}`
    }
    return  `Please provide value < 100`
}
console.log(nearestValue(value1, value2));
console.log(nearestValue(88, 155));


// 24 Write a #JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

let numOne = 44;
let numTwo = 55;

const largeInRange = function(num1, num2){
    if((num1 >= 40 && num1 <= 60) && (num2 >= 40 && num2 <= 60)){
        return num1 > num2 ? `larger number ${num1}` : `larger number ${num2}`
    }
    return `Please provide value in range of 40-60`
}
console.log(largeInRange(numOne, numTwo))
console.log(largeInRange(55, 33))


// // 25 Write a #JavaScript program to check a given string containing 2 to 4 numbers of a specified character.


// // 26 Write a #JavaScript program to check if the last digit of the three given positive integers is the same.


// 27 Write a #JavaScript program to create a new string with the first 3 characters in the lower case from a given string. If the string length is less than 3 convert all the characters in the upper case.

let newStr = 'Luvey';

const convertStr = function(str){
if(str.length >= 3){
    // return str.slice(0,3).toLowerCase()
    return str[0] + str[1] + str[2];

}
 return str.toUpperCase();
}
console.log(convertStr(newStr))

// // 28 Write a #JavaScript program to check the total marks of a student in various examinations. The student will get an A+ grade if the total marks are in the range of 89..100 inclusive, if the examination is "Final-exam." the student will get an A+ grade where total marks must be greater than or equal to 90. Return true if the student gets an A+ grade or false otherwise.


let studentResult = {
    math: 56,
    english: 99,
    hindi: 67,
    physics: 88,
    computer: 99
}

function finalResult(marks){
    final = (marks.math + marks.english + marks.hindi + marks.computer + marks.physics) *100 / 500;
    if(final > 90){
        return true;
    } return false
}
console.log(finalResult(studentResult));





// 29 Write a #JavaScript program to check two given non-negative integers, whether one of the numbers (not both) is a multiple of 7 or 11.

let num1 = 77;
let num2 = 23;

const nonNegativeMultiple = function(num1, num2){
    if(num1 > 0 && num2 > 0){
        if(((num1 % 7 ===0) && (num1 % 11 ===0)) && ((num2 % 7 ===0) &&(num2 % 11 ===0))){
                return  false + ` => Both numbers are multiple of 7 or 11`;
        }else if(((num1 % 7 ===0) && (num1 % 11 ===0)) || ((num2 % 7 ===0) &&(num2 % 11 ===0))){
            return ((num1 % 7 ===0) && (num1 % 11 ===0)) ? ` multiple of 7 or 11 is :=> ${num1}  ` : ` multiple of 7 or 11 is :=> ${num2}  `;
        }
        return `Neither the ${num1} nor the ${num2} number is a multiple of 7 or 11`
    }
    return `Please provide +ve number`
}
console.log(nonNegativeMultiple(num1, num2)) // only one(not both)
console.log(nonNegativeMultiple(231,77)) // both of them
console.log(nonNegativeMultiple(-31,77)) // -ve value
console.log(nonNegativeMultiple(31,27)) // non of them


// 30 Write a #JavaScript program to check two given integer values and return true if one of the numbers is 15 or if their sum or difference is 15.
const returnTrueValue = function(x,y){
    if((x ===50 || y === 15) || (x  + y == 15) || (x - y ===15) || (y - x ===15)){
       return true
    } 
    return false
   }
   console.log(returnTrueValue(21,15));  // one  value of them...
   console.log(returnTrueValue(16,1));   // difference of them
   console.log(returnTrueValue(14,1));  // sum of them....
   console.log(returnTrueValue(15,15));  // both value of them
   console.log(returnTrueValue(43,55));  // !both value of them 

// 31 Write a #JavaScript program to check from three given integers whether a number is greater than or equal to 20 and less than one of the others.

let givNum1 = 11;
let givNum2 = 43;
let givNum3 = 143;

function checkingNum(num1, num2, num3){
 let num = 20;
    
}
console.log(checkingNum(givNum1, givNum2, givNum3));


// 32 Write a #JavaScript Program to Find the Square Root

let sqNum = 25;

const sqrtNum = function(num){
 return Math.sqrt(num);
}
console.log(sqrtNum(sqNum));
console.log(sqrtNum(23));
console.log(sqrtNum(16));



// 33 Write a #JavaScript Program to Calculate the Area of a Triangle

let sideOne = 2;
let sideTwo =3;
let sideThree = 4;

let s = (sideOne + sideTwo + sideThree) / 2

const areaFormula = function(s1,s2,s3){
    let s = (s1+ s2 + s3)/2
    if(s1 + s2 > s3){
        let result = Math.sqrt(s* (s-s1)*(s-s2)*(s-s3)).toFixed(1)
        return Number(result);
    }
    return  `Invalid input make sure a + b > c`
}
console.log(areaFormula(sideOne, sideTwo, sideThree))
console.log(areaFormula(3,4,5))



// 34  Write a #JavaScript Program to Swap Two Variables.
// swap ? => a -> b, b -> a

let swapOne = 2;
let swapTwo = 3;

const swapNum = function(a, b){
  let temp = a;
  a = b;
  b = temp;
  return {a,b}
}
console.log(swapNum(swapOne, swapTwo));
console.log(swapNum(66, 55));


// // 35 Write a #Javascript Program to Solve Quadratic Equation.
// // 36 Write a #JavaScript Program to Convert Kilometers to Miles.
// // 37 Write a #Javascript Program to Convert Celsius to Fahrenheit.


// 38 Write a #Javascript Program to Generate a Random Number.
console.log(Math.floor(Math.random() * 75 )+1)                    


// 39 Write a #Javascript Program to Check if a number is Positive, Negative, or Zero.

let givNun = 23;

const givNumProperty = function(num){
    if(num === 0){
        return `it is Zero`
    } else if(num > 0){
        return `${num} is a Positive number`
        
    } else{
        return `${num} is a Negative number`
    }
}
console.log(givNumProperty(givNun)); //positive
console.log(givNumProperty(0));  // Zero
console.log(givNumProperty(-7)); // Negative


// // 42 Write a #JavaScript Program to Check Prime Number.


// // 43 Write a #JavaScript Program to Print All Prime Numbers in an Interval.
// // 44 Write a #JavaScript Program to Find the Factorial of a Number.
// 45 Write a #JavaScript Program to Display the Multiplication Table

let tableNum = 3;

 const MultiplicationTab = function(num){
     console.log(`--- Multiplication Table of ${num} ---`)   //  // remove Comment for result
  for (let i = 1; i <=10; i++) {
     console.table(i*num) 
    }
}
MultiplicationTab(tableNum);
MultiplicationTab(111);


// // 46 Write a #JavaScript Program to Print the Fibonacci Sequence.

// // 49 Write a #JavaScript Program to Make a Simple Calculator.

function simpleCalc(num1, op, num2){
    if(op === "+"){
        return num1 + num2
    } if(op === "*"){
        return num1 * num2
    } if(op === "/"){
        return num1 / num2
    } if(op === "-"){
        return num1 - num2
    } 
}
console.log(simpleCalc(2,"*",6))


// // 51 Write a #JavaS,cript Program to Check if the Numbers Have the Same Last Digit
// // 52 Write a #JavaScript Program to Find HCF or GCD.
// // 53 Write a #JavaScript Program to Find LCM.
// // 54 Write a #JavaScript Program to Find the Factors of a Number.
// // 55 Write a #JavaScript Program to Find Sum of Natural Numbers Using Recursion.
// // 56 Write a #JavaScript Program to Guess a Random Number.
// // 57 Write a #JavaScript Program to Shuffle Deck of Cards.
// // 58 Write a #JavaScript Program to Display Fibonacci Sequence Using Recursion.
// // 59 Write a #JavaScript Program to Display Fibonacci Sequence Using Recursion.
// // 60 Write a #JavaScript Program to Convert Decimal to Binary.
// // 61 Write a #JavaScript Program to Find ASCII Value of Character.
// // 62 Write a #JavaScript Program to Check Whether a String is a Palindrome or Not.
// // 63 Write a #JavaScript Program to Sort Words in Alphabetical Order.
// // 64 Write a #JavaScript Program to Replace Characters of a String.
// // 65 Write a #JavaScript Program to Reverse a String.
// // 66 Write a #JavaScript Program to Create Objects in Different Ways.
// // 67 Write a #JavaScript Program to Check the Number of Occurrences of a Character in the String.
// // 68 Write a #JavaScript Program to Convert the First Letter of a String into UpperCase.
// // 69 Write a #JavaScript Program to Count the Number of Vowels in a String.
// // 70  Write a #JavaScript Program to Count the Number of Vowels in a String.
// // 71 Write a #JavaScript Program to Check Whether a String Starts and Ends With Certain Characters.
// // 72 Write a #JavaScript Program to Check if a Key Exists in an Object.
// // 73 Write a #JavaScript Program to Loop Through an Object.
// // 74 Write a #JavaScript Program to Count the Number of Keys/Properties in an Object.
// // 75 Write a #JavaScript Program to Check if a String Starts With Another String.
// // 76 Write a #JavaScript Program to Display Date and Time.
// // 77 Write a #JavaScript Program to Check Leap Year.
// // 78 Write a #Javascript Program to Display Current Date.
// // 79 Write a #JavaScript Program to Compare The Value of Two Dates.
// // 80 Write a #JavaScript Program to Create Countdown Timer.
// // 81 Write a #JavaScript Program to Remove Specific Item From an Array.
// // 82 Write a #JavaScript Program to Check if An Array Contains a Specified Value.
// // 83 Write a #JavaScript Program to Insert Item in an Array.
// // 84 Write a #JavaScript Program to Append an Object to An Array.
// // 85 Write a #JavaScript Program to Check if An Object is An Array.
// // 86 Write a #JavaScript Program to Empty an Array.
// // 87 Write a #JavaScript Program to Add Element to Start of an Array.
// // 88 Write a #JavaScript Program to Remove Duplicates From Array.
// // 88  Write a #JavaScript Program to Merge Two Arrays and Remove Duplicate Items.
// // 89 Write a #JavaScript Program to Sort Array of Objects by Property Values
// // 90 Write a #JavaScript Program to Create Two Dimensional Array.
// // 91 Write a #JavaScript Program to Extract Given Property Values from Objects as Array.
// // 92 Write a #JavaScript Program to Compare Elements of Two Arrays.
// // 93 Write a #JavaScript Program to Get Random Item From an Array.
// // 94 Write a #JavaScript Program To Perform Intersection Between Two Arrays.
// // 95 Write a #JavaScript Program to Split Array into Smaller Chunks.
// // 96 Write a #JavaScript Program to Include a JS file in Another JS file.
// // 97 Write a #JavaScript Program to Get File Extension.
// // 98 Write a #JavaScript Program To Check If A Variable Is undefined or null.
// // 99 Write a #JavaScript Program to Set a Default Parameter Value For a Function.
// // 100 Write a #JavaScript Program to Illustrate Different Set Operations.
// // 101 Write a #Javascript Program to Generate a Random Number Between Two Numbers.
// // 102 Write a #JavaScript Program To Get The Current URL
// // 103 Write a #JavaScript Program to Validate An Email Address.
// // 104 Write a #JavaScript Program to Check If a Variable is of Function Type.
// // 105 Write a #JavaScript Program to Pass Parameter to a setTimeout() Function.
// // 106 Write a #JavaScript Program to Generate a Range of Numbers and Characters.
// // 107 Write a #JavaScript Program to Perform Function Overloading.
// // 108  Write a #JavaScript Program to Check if a Number is a Float or Integer.
// // 109 : Write a #JavaScript Program to Pass a Function as Parameter.
// // 110 : Write a #JavaScript Program to Get the Dimensions of an Image
// // 111  Write a #JavaScript Program to Remove All Whitespaces From a Text

// //  112   Write a #JavaScript Program to find factorial recursevly
// 5! => 5*4*3*2*1

function factorial(num){
    if(num == 1 ) {
        return 1
    }
    return num * factorial(num -1)   
}
console.log(factorial(5));


// //  113   Write a #JavaScript Program to find  fibonacci series recursiuly

function fibonacci(num){
    if(num ===1){
        return [0,1]
    }
    let result = fibonacci(num-1)
   result.push(result[result.length-1] + result[result.length-2])
   return result
    
}
console.log(fibonacci(7));
.

//  114  Find Index of targeted Element recursivly
let array = [1,2,3,1,5,1,2]
 let target = 1;
// // Output 5

function findIndexFromZero(arr,target,startIndex){
        if(target === arr[startIndex]){
            return startIndex
        }
       return findIndexFromZero(arr,target,startIndex-1)
}

function findIndex(arr, target){
    return findIndexFromZero(arr, target, arr.length-1)
}
console.log(findIndex(array, target));


//  115 plue  one at the end in array
// Input [1,3,4]
// Output [1,3,5]


var plusOne = function(digits) {
    if(digits[0] === 9){
        digits.unshift(0)
   }
    if(digits[0] ===9){
       
        if(digits[0] ===9){
            digits = [1,0]
        }
        else digits[0] = digits[0] + 1
   }
    else{
        digits[digits.length-1] += 1 
   for(let i = digits.length-1; i>=0;i--){
       if(digits[i] >=10){
           digits[i] = digits[i] % 10
           digits[i-1] += Math.floor(digits[i]/10) + 1
       }
   }
    }
    if(digits[0] ===0){
        digits.shift(0)
    }
   return digits
};
console.log(plusOne([1,2,7]));
console.log(plusOne([9,9,8]));




