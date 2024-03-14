//Task 23

//Conditional Tests: Write a series of conditional tests. Print
// a statement describing each test and your prediction for the 
//results of each test.

//No 1

let car : string = "Subaru";
console.log("Is car == `Subaru`? Pridict true ");
console.log(car == `Subaru`);

//No 2
console.log("Is car == `Honda`? Pridict true ");
console.log(car == `Honda`);

//No 3
console.log("Is car == `Toyoto`? Pridict false ");
console.log(car == `Toyoto`);

//No 4
console.log("Is car .lenght > 4? Pridict false ");
console.log(car.length > 4);

//No 5
console.log("Is car.startsWith (`sub`) Pridict true");
console.log(car.startsWith(`sub`));

//N0 6
console.log("Is car.includes(`bar`) Pridict false ");
console.log(car.includes(`bar`));

//NO 7
console.log("Is car.endsWith(`aru`) Pridict true");
console.log(car.endsWith(`aru`));

//NO 8
console.log("Is car.toLowerCase()== `SUBARU` Pridict true");
console.log(car.toLowerCase()== `subaru`);

//NO 9
console.log("Is car.toUpperCase()== `SUBARU` Pridict False");
console.log(car.toUpperCase()== `SUBARU`);

//NO 10
let isCarEmpty : boolean = car.length=== 0;
console.log("Is car an empty string ? Pridict false");
console.log(isCarEmpty)




