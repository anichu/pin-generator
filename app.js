function generatePin() {
	let rand = Math.round(Math.random() * 10000);
	rand = rand + "";
	if (rand.length < 4) {
		return generatePin();
	} else if (rand.length === 4) {
		return rand;
	}
}

const generatePinDisplay = document.getElementById("generate-pin-display");
document.querySelector(".generate-btn").addEventListener("click", () => {
	let pin = generatePin();
	generatePinDisplay.value = pin;
});

const typed = document.getElementById("typed-input");

document.getElementById("calculator").addEventListener("click", (e) => {
	let numbers = e.target.innerText;
	let previousTyped = typed.value;
	if (isNaN(numbers)) {
		if (numbers === "C") {
			typed.value = "";
		} else if (numbers === "<") {
			previousTyped = previousTyped.split("");
			previousTyped.pop();
			previousTyped = previousTyped.join("");
			typed.value = previousTyped;
			console.log(previousTyped);
		}
	} else {
		typed.value = previousTyped + numbers;
	}
});

const success = document.getElementById("success");
const failure = document.getElementById("failure");

document.querySelector(".submit-btn").addEventListener("click", () => {
	let pin = generatePinDisplay.value;
	let typedValue = typed.value;
	if (pin === typedValue) {
		success.style.display = "block";
		failure.style.display = "none";
	} else {
		success.style.display = "none";
		failure.style.display = "block";
	}
});
