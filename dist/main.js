"use strict";
let dialog = document.querySelector("#main-dialog");
let input = document.querySelector("#number-input");
let button = document.querySelector("#createButton");
window.addEventListener("load", () => { dialog === null || dialog === void 0 ? void 0 : dialog.showModal(); });
button === null || button === void 0 ? void 0 : button.onclick = () => {
    var _a;
    dialog === null || dialog === void 0 ? void 0 : dialog.close();
    let placeValue = parseInt((input === null || input === void 0 ? void 0 : input.value) || "0", 10);
    if (document.querySelector("input[name=algorithm]:checked")) {
        switch ((_a = document.querySelector("input[name=algorithm]:checked")) === null || _a === void 0 ? void 0 : _a.value) {
            case "first":
                yimroFirstAlgorithm(placeValue);
                break;
            case "second":
                displaySecAlgorithm(yimroSecondAlgorithm(placeValue));
                break;
        }
    }
};
function yimroFirstAlgorithm(placeValue) {
    let displayedNumber = 1;
    let incrementer = 1;
    document.body.style.setProperty("--numOfCells", `${placeValue}`);
    for (let i = 0; i < placeValue ** 2; i++) {
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
function yimroSecondAlgorithm(placeValue) {
    let numberOfCells = (placeValue * 2 - 1) ** 2;
    let arrayOfIndexes = new Array(numberOfCells).fill(1);
    for (let i = 1; i < placeValue; i++) {
        let middleOfArray = ((numberOfCells + 1) / 2) - 1;
        let upDownIndex = placeValue * 2 - 1;
        arrayOfIndexes[middleOfArray + upDownIndex * i] = i + 1;
        arrayOfIndexes[middleOfArray - upDownIndex * i] = i + 1;
        arrayOfIndexes[middleOfArray + i] = i + 1;
        arrayOfIndexes[middleOfArray - i] = i + 1;
        for (let j = 1; j < placeValue; j++) {
            arrayOfIndexes[middleOfArray + upDownIndex * i + j] = i + j + 1;
            arrayOfIndexes[middleOfArray + upDownIndex * i - j] = i + j + 1;
        }
        for (let j = 1; j < placeValue; j++) {
            arrayOfIndexes[middleOfArray - upDownIndex * i + j] = i + j + 1;
            arrayOfIndexes[middleOfArray - upDownIndex * i - j] = i + j + 1;
        }
    }
    return arrayOfIndexes;
}
function displaySecAlgorithm(patternArray) {
    document.body.style.setProperty("--numOfCells", `${Math.sqrt(patternArray.length)}`);
    patternArray.forEach(number => {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.innerHTML = number.toString();
        document.body.appendChild(cell);
    });
}
