"use strict";
//Changing Guest List: You just heard that one of your guests 
//can’t make the dinner, so you need to send out a new set of
// invitations. You’ll have to think of someone else to invite.
Object.defineProperty(exports, "__esModule", { value: true });
let guestArr = ["Hoorain", "Nabiha", "Aflah"];
let canNotAttend = "Hoorain";
//consolelog(canNotAttend + " ","can not attend the dinner." );
let newGuest = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
// console.log(canNotAttend);
guestArr.map((items) => console.log(`Dear ${items} you are invited to the dinner.`));
