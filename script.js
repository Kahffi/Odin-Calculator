const buttons = document.querySelectorAll(".num-btn");
const resultDisplay = document.getElementById("display");
const clearBtn = document.getElementById("clearBtn");
const resultBtn = document.getElementById("resultBtn");
const operators = document.querySelectorAll(".operators");
const decimalBtn = document.getElementById("decimalBtn");
const minBtn = document.getElementById("minus-btn");
const btnDel = document.getElementById("btn-delete");

document.getRootNode;

buttons.forEach((button) => {
	button.addEventListener("click", displayNum);
	document.addEventListener("keypress", (e) => {
		console.log(e.key);
		if (e.key == button.value) {
			button.click();
		}
	});
});

operators.forEach((operator) => {
	operator.addEventListener("click", operatorsHandler);
	document.addEventListener("keypress", (e) => {
		if (e.key == operator.value) {
			operator.click();
		}
	});
});

let currOperation = "";
let result = 0;
let needReset = false;

resultBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", resetCalculator);
decimalBtn.addEventListener("click", divideByTen);
minBtn.addEventListener("click", multiplyMinOne);
btnDel.addEventListener("click", delNumber);

function delNumber() {
	resultDisplay.textContent = Math.floor(getResDisplayNum() / 10);
}

function multiplyMinOne() {
	resultDisplay.textContent = getResDisplayNum() * -1;
}

function divideByTen() {
	if (resultDisplay.textContent.includes(".")) {
		return;
	}
	resultDisplay.textContent = resultDisplay.textContent + ".";
}

function operatorsHandler(e) {
	if (currOperation != "" && !needReset) {
		chainCalc();
	} else if (currOperation == "") {
		normalCalc();
	}
	console.log(e.target.value);
	currOperation = e.target.value;
}

function resetCalculator() {
	resultDisplay.textContent = 0;
	firstValue = 0;
	secondValue = 0;
	result = 0;
	currOperation = "";
}

function clearDisplay() {
	resultDisplay.textContent = 0;
}

function chainCalc() {
	calculate(resultDisplay.textContent);
	needReset = true;
}

function normalCalc() {
	result = resultDisplay.textContent * 1;
	resultDisplay.textContent = 0;
}

function getResDisplayNum() {
	return resultDisplay.textContent * 1;
}

function calculate(e) {
	if (currOperation !== "" && needReset && e) {
		currOperation = "";
		return;
	}
	if (currOperation == "" && e) {
		return;
	}
	if (currOperation === "+") {
		result += getResDisplayNum();
	} else if (currOperation === "-") {
		result -= getResDisplayNum();
	} else if (currOperation === "*") {
		result *= getResDisplayNum();
	} else if (currOperation === "/") {
		if (getResDisplayNum() == 0) {
			console.log("pek");
			alert("cannot divided with 0");
			resetCalculator();
			return;
		}
		result /= getResDisplayNum();
	}
	console.log(`${result} + ${resultDisplay.textContent * 1}`);
	currOperation = "";
	if (result.toString().includes(".")) {
		result = result.toString().slice(0, 15);
	}
	resultDisplay.textContent = result;
}

function displayNum(e) {
	if (resultDisplay.textContent === "0" || needReset) {
		needReset = false;
		resultDisplay.textContent = "";
	}
	resultDisplay.textContent = resultDisplay.textContent + e.target.value;
}

console.log("oek");
