"use strict";
let placeValue;
let numberOfCells;
let displayedNumber = 1;
let incrementer = 1;
let dialog = document.querySelector("#main-dialog");
let input = document.querySelector("#number-input");
let button = document.querySelector("#createButton");
window.addEventListener("load", () => { dialog === null || dialog === void 0 ? void 0 : dialog.showModal(); });
button === null || button === void 0 ? void 0 : button.onclick = () => {
    dialog === null || dialog === void 0 ? void 0 : dialog.close();
    placeValue = parseInt((input === null || input === void 0 ? void 0 : input.value) || "0", 10);
    numberOfCells = placeValue ** 2;
    document.body.style.setProperty("--numOfCells", `${placeValue}`);
    createTable();
};
function createTable() {
    for (let i = 0; i < numberOfCells; i++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        if (i % placeValue == 0) {
            displayedNumber = (i / placeValue) + 1;
            incrementer = Math.abs(incrementer);
        }
        if (displayedNumber == placeValue) {
            incrementer = -incrementer;
        }
        cell.innerHTML = displayedNumber.toString();
        document.body.appendChild(cell);
        displayedNumber += incrementer;
    }
}
