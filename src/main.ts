let placeValue: number;
let numberOfCells: number;
let displayedNumber = 1;
let incrementer = 1;

let dialog = document.querySelector<HTMLDialogElement>("#main-dialog");
let input = document.querySelector<HTMLInputElement>("#number-input");
let button = document.querySelector<HTMLButtonElement>("#createButton");

window.addEventListener("load", () => { dialog?.showModal() } );

button?.onclick = () => {
	
	dialog?.close();
	
	placeValue = parseInt(input?.value || "0", 10);
	numberOfCells = placeValue**2;
	
	document.body.style.setProperty("--numOfCells", `${placeValue}`);

	createTable();
}

function createTable(): void {
		
	for (let i = 0; i < numberOfCells; i++) {
		
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
