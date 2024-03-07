"use strict";
//More Guests: You just found a bigger dinner table, so now more 
//space is available. Think of three more guests to invite to 
//dinner.
Object.defineProperty(exports, "__esModule", { value: true });
let guestArr = ["Hoorain", "Nabiha", "Aflah"];
let canNotAttend = "Hoorain";
let newGuest = "Ali";
guestArr[guestArr.indexOf(canNotAttend)] = newGuest;
console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items} you are invited to the dinner.`));
let guestBegin = "Ayesha";
guestArr.unshift(guestBegin);
console.log(guestArr);
let guestMiddle = "Jiya";
let miiddleIndex = guestArr.length / 3;
guestArr.splice(miiddleIndex, 1, guestMiddle);
console.log(guestArr);
guestArr.push("Ali Hamza");
console.log(guestArr);
guestArr.map((items) => console.log(`Dear ${items} you are invited to the dinner`));
