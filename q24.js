// More coditional test.
var car = "subaru";
var age = 20;
var numbers = [3, 6, 9, 12, 15];
//***string test***
//True test
console.log("Is car == `subaru`?I predict true.");
console.log(car == "subaru"); //true
//False test
console.log("Is car != `subaru`?I predict false.");
console.log(car != "subaru"); //false
//***Lower case function test***
//True test
console.log("Is car.toLowerCase() == `subaru`?I predict true.");
console.log(car.toLowerCase() == "subaru"); //true
//False test
console.log("Is car.toLowerCase() == `toyota`?I predict false.");
console.log(car.toLowerCase() == "toyota"); //false
//***Numarical test***
//equality and inequality
console.log("Is age == 20?I predict true.");
console.log(age == 20); //true
console.log("Is age != 25?I predict true.");
console.log(age != 25); //true
//***greater than or less than***
console.log("Is age > 18?I predict true.");
console.log(age > 18); //true
console.log("Is age < 18?I predict false.");
console.log(age < 18); //false
//***greater than or equal to and less than to equal to**** 
console.log("Is age >= 18?I predict true.");
console.log(age >= 18); //true
console.log("Is age <= 15?I predict false.");
console.log(age <= 15); //false
//***And or opretion test**** 
//True test with "and" oprerators
console.log("Is 10 < age < 25 ?I predict true.");
console.log(age < 25 && age > 10); //true
console.log("Is age > 20 or age< 15?I predict false.");
console.log(age > 20 || age < 15); //false
//***Test wheter an item in array****
console.log("Is '3' in numbers?I predict true."); //true
console.log(3 in numbers); //true
// false test
console.log("Is '7' in numbers?I predict false."); //true
console.log(7 in numbers); //false
