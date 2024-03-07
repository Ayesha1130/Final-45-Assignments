//Task 18
//Seeing the World: Think of at least five places in the world
// you’d like to visit.
let placeToVisit = ["Dubai", "Canada", "Australia", "Switzerland", "Pakistan"];
console.log("original Order:", placeToVisit);
// Print your array in alphabetical order.
console.log("alphabetical Order:", [placeToVisit].sort());
// Show that your array is still in its original order by printing it.
console.log("original Order after sorting:", placeToVisit);
//Print your array in reverse alphabetical order without changing .
console.log(" reverse alphabetical Order:", [placeToVisit].sort().reverse());
//• Show that your array is still in its original order by printing it again.
console.log("original order after reverse sorting:", placeToVisit);
//Reverse the order of your list. Print the array to show
// that its order has changed.
console.log("Reversed order:", placeToVisit);
//Reverse the order of your list again. Print the list to show
// it’s back to its original order
placeToVisit.reverse();
console.log("Back to original order:", placeToVisit);
//Sort your array so it’s stored in alphabetical order. 
placeToVisit.sort();
console.log("sorted in alphabetical order:", placeToVisit);
//Sort to change your array so it’s stored in reverse
// alphabetical order.
placeToVisit.sort((a, b) => b.localeCompare(a));
console.log("sorted in reverse alphabeticalorder:", placeToVisit);
export {};
