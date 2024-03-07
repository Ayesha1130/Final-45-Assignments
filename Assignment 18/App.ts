//Task 18
//Seeing the World: Think of at least five places in the world
// you’d like to visit.


let placesToVisit : string[] = ["Dubai","Canada","Australia","Switzerland","Pakistan"];

console.log("original Order:", placesToVisit);

// Print your array in alphabetical order.

console.log("alphabetical Order:", [placesToVisit].sort());

// Show that your array is still in its original order by printing it.

console.log("original Order after sorting:", placesToVisit);

//Print your array in reverse alphabetical order without changing .

console.log(" reverse alphabetical Order:", [placesToVisit].sort().reverse());

//• Show that your array is still in its original order by printing it again.

console.log("original order after reverse sorting:", placesToVisit);

//Reverse the order of your list. Print the array to show
// that its order has changed.

console.log("Reversed order:",placesToVisit);

//Reverse the order of your list again. Print the list to show
// it’s back to its original order

placesToVisit.reverse();
console.log("Back to original order:",placesToVisit);

//Sort your array so it’s stored in alphabetical order. 

placesToVisit.sort();
console.log("sorted in alphabetical order:",placesToVisit);

//Sort to change your array so it’s stored in reverse
// alphabetical order.

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabeticalorder:",placesToVisit);












