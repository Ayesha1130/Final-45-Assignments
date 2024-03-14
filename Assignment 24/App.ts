//Task 24

//More Conditional Tests: You don’t have to limit the number of 
//tests you create to 10. If you want to try more comparisons, 
//write more tests. Have at least one True and one False result 
//for each of the following:

//NO 1  Tests for equality and inequality with strings

let name_1 : string = "Ayesha";
let name_2 : string = "Miss Ayesha";
let name_3 : string = "Ayesha Iqbal";

if (name_1 == name_2){
    console.log("names are equal")
} else {
     console.log("names are not equal")
};

if( name_1 == name_3){
} else {
    console.log("name are equal");
}

//NO 2  Tests using the lower case function

let inputString: string = "Hello World";

if(inputString.toLowerCase()=== "hello world"){
    console.log("string is lowercase `hello world`")
} else {
    console.log("string is not in lowercase `hello world`")
}


//No 3  Numerical tests involving equality and inequality, greater
// than and less than, greater than or equal to, and less than or 
//equal to

//Equality

let num1 : Number = 10;
let num2 : number = 5;

if ("num1 === num2"){
    console.log(`${num1} is equal to ${num2}`);
} else {
    console.log(`${num1} is not equal to ${num2}`);
}

//Inequality,

if ("num1 !== num2"){
    console.log(`${num1} is not equal to ${num2}`);
} else {
    console.log(`${num1} is  equal to ${num2}`);
}

//Greater than

if ("num1 > num2"){
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num1} is not greater than ${num2}`);
}

//Less than

if ("num1 < num2"){
    console.log(`${num1} is less than ${num2}`);
} else {
    console.log(`${num1} is not less than ${num2}`);
}

//Greater than or equal to


if ("num1 >= num2"){
    console.log(`${num1} is greater than or equal to ${num2}`);
} else {
    console.log(`${num1} is not greater than or equal to ${num2}`);
}

//Less than or equal to


if ("num1 <= num2"){
    console.log(`${num1} is less than or equal to ${num2}`);
} else {
    console.log(`${num1} is not less than or equal to ${num2}`);
}

//NO 4  Tests using "and" and "or" operators


let no1 : number = 5;
let no2 : number = 10;

if((no1 > 0 && no2 >0) || (no1 + no2 === 15)){
    console.log("both number are equal are their sum 15.");
} else {
    console.log("this condition is not equal");
}

//N0 5 / 6. Test whether an item is in a array
//Test whether an item is not in a array


let city : string[] = ["islamabad","karachi","lahore","quetta"];
if(city.includes("karachi")){
    console.log("karchi is in city list");
}

if(city.includes("peshawar")){
    console.log("peshawar not include in an array")
}










  