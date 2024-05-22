let dialog = document.querySelector<HTMLDialogElement>("#main-dialog");
let input = document.querySelector<HTMLInputElement>("#number-input");
let button = document.querySelector<HTMLButtonElement>("#createButton");

window.addEventListener("load", () => { dialog?.showModal() } );

button?.onclick = () => {
	
	dialog?.close();
	
	let placeValue = parseInt(input?.value || "0", 10);

	if (document.querySelector("input[name=algorithm]:checked")) {

		switch(document.querySelector<HTMLInputElement>("input[name=algorithm]:checked")?.value) {

			case "first":
				yimroFirstAlgorithm(placeValue);
				break;

			case "second":
				displaySecAlgorithm(yimroSecondAlgorithm(placeValue));
				break;
		}
	}
}

function yimroFirstAlgorithm(placeValue: number): void {
		
	let displayedNumber = 1;
	let incrementer = 1;
	
	document.body.style.setProperty("--numOfCells", `${placeValue}`);

	for (let i = 0; i < placeValue**2; i++) {
		
		let cell: HTMLDivElement = document.createElement("div");
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

function yimroSecondAlgorithm(placeValue: number): number[] {
	
	let numberOfCells = (placeValue*2 - 1)**2;
	let arrayOfIndexes = new Array(numberOfCells).fill(1);

	for (let i = 1; i < placeValue; i++) {
		
		let middleOfArray = ((numberOfCells + 1) / 2) -1;
		let upDownIndex = placeValue*2 - 1;

		// These place the numbers of the main axis.
		arrayOfIndexes[middleOfArray + upDownIndex*i] = i + 1;
		arrayOfIndexes[middleOfArray - upDownIndex*i] = i + 1;

		arrayOfIndexes[middleOfArray + i] = i + 1;
		arrayOfIndexes[middleOfArray - i] = i + 1;
		
		// These two indivitual loops assign the values of all the other cells.
		for (let j = 1; j < placeValue; j++) {
			arrayOfIndexes[middleOfArray + upDownIndex*i + j] = i + j + 1;
			arrayOfIndexes[middleOfArray + upDownIndex*i - j] = i + j + 1;
		}

		for (let j = 1; j < placeValue; j++) {
			arrayOfIndexes[middleOfArray - upDownIndex*i + j] = i + j + 1;
			arrayOfIndexes[middleOfArray - upDownIndex*i - j] = i + j + 1;
		}
	}

	return arrayOfIndexes;
}

function displaySecAlgorithm(patternArray: number[]): void {
	
	document.body.style.setProperty("--numOfCells", `${Math.sqrt(patternArray.length)}`);

	patternArray.forEach(number => {
		
		let cell: HTMLDivElement = document.createElement("div");
		cell.classList.add("cell");
		cell.innerHTML = number.toString();
		document.body.appendChild(cell);
	});
}
