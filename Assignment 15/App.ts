//Changing Guest List: You just heard that one of your guests 
//can’t make the dinner, so you need to send out a new set of
// invitations. You’ll have to think of someone else to invite.


let guestArr : string[] = ["Hoorain","Nabiha","Aflah"];
let canNotAttend : string = "Hoorain";
//consolelog(canNotAttend + " ","can not attend the dinner." );

let newGuest : string = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest
// console.log(canNotAttend);
guestArr.map((items) =>
console.log(`Dear ${items} you are invited to the dinner.`) 
)

