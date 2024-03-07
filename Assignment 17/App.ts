//Task 17
//• Start with your program from Exercise 16. Add a new line that 
//prints a message saying that you can invite only two people for 
//dinner.

//• Remove guests from your list one at a time until only two 
//names remain in your list. 

//let guests : string[] = ["Ali", "Hamza", "jiya", "Ash"];
//console.log("Due to limied  I wanted to reach out and express my sincere apologies for the upcoming dinner.")


//Remove guests from your list one at a time until only two names 
//remain in your list. 
//  while (guests.length > 2){
//     const removedGuest = guests.pop();
//     console.log(`sorry ${removedGuest}, you are no longer invited to dinner.`);
//  }

//Print a message to each of the two people still on your list,
// letting them know they’re still invited.

let guests : string[] = ["Ali", "Hamza"];

guests.forEach((guests) => {
    console.log(`Dear ${guests} you are still invited to dinner.`)
})

guests.pop();
guests.pop()

//• Remove the last two names from your list, so you have an
// empty list.