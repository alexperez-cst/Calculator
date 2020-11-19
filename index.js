const buttons = Array.from(document.querySelectorAll('#inputButtons'));
const actualNums = document.querySelector('#actualText');
const finalResult = document.querySelector('#result');
buttons.forEach((a) => {
	a.addEventListener('click', identifyButton);
});
let operation = [];
function operation(nums, operators) {}
function sum(a, b) {}
function subtract(a, b) {}
function multiply(a, b) {}
function divide(a, b) {}
function modulo(a, b) {}
function identifyButton(e) {
	const eventTargetValue = e.target.id;
	switch (eventTargetValue) {
		case 'ac': {
			clearNums();
			break;
		}
		case 'backspace': {
			actualNums.textContent = actualNums.textContent.slice(
				0,
				actualNums.textContent.length - 1
			);
			break;
		}
		case 'modulo': {
			operation.push('%');
			break;
		}
		case 'division': {
			operation.push('/');
			break;
		}
		case 'seven': {
			operation.push(7);
			break;
		}
		case 'eight': {
			operation.push(8);
			break;
		}
		case 'nine': {
			operation.push(9);
			break;
		}
		case 'multiply': {
			operation.push('*');
			break;
		}
		case 'four': {
			operation.push(4);
			break;
		}
		case 'five': {
			operation.push(5);
			break;
		}
		case 'six': {
			operation.push(6);
			break;
		}
		case 'minus': {
			operation.push('-');
			break;
		}
		case 'one': {
			operation.push(1);
			break;
		}
		case 'two': {
			operation.push(2);
			break;
		}
		case 'three': {
			operation.push(3);
			break;
		}
		case 'plus': {
			operation.push('+');
			break;
		}
		case 'cero': {
			operation.push(0);
			break;
		}
		case 'comma': {
			operation.push(',');
			break;
		}
		case 'operate': {
			break;
		}
	}
}
function clearNums() {
	firstNum = 0;
	secondNum = 0;
	operator = '';
	nextNums = [];
	nextOperators = [];
}
