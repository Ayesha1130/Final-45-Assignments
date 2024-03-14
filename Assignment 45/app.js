"use strict";
// Task 45      
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacture, model, optional) {
    return {
        manufacture,
        model,
        ...optional
    };
}
const mycar = createCar("toyota", "Vigo", { color: "Black", year: "2024" });
console.log(mycar);
