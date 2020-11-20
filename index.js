const buttons = Array.from(document.querySelectorAll('#inputButtons'));
const actualNums = document.querySelector('#actualText');
const finalResult = document.querySelector('#result');
buttons.forEach((a) => {
	a.addEventListener('click', identifyButton);
});
let firstNum = '';
let secondNum = '';
let operator = '';
let writeOperator = false;
function identifyButton(e) {
	const eventTargetValue = e.target.textContent;
	console.log(eventTargetValue);
	if (eventTargetValue === '=') {
		if (!secondNum || !firstNum) {
			finalResult.textContent = firstNum ?? 0;
			return;
		}
		console.log(firstNum, secondNum, operator);
		finalResult.textContent = operate(+firstNum, +secondNum, operator);
		firstNum = finalResult.textContent;
		secondNum = '';
		writeOperator = false;
		return;
	}
	if (eventTargetValue === '.' && actualNums.textContent.includes('.')) {
		return;
	}
	if (eventTargetValue === 'C') {
		return (actualNums.textContent = actualNums.textContent.slice(
			0,
			actualNums.textContent.length - 1
		));
	} else if (eventTargetValue === 'AC') {
		return clearNums();
	}
	if (isOperator(eventTargetValue) && writeOperator === true) {
		console.log('Im in');
		console.log(firstNum);
		firstNum = operate(+firstNum, +secondNum, operator);
		operator = eventTargetValue;
		secondNum = '';
		writeOperator = true;
	} else if (isOperator(eventTargetValue)) {
		operator = eventTargetValue;
		writeOperator = true;
	} else if (!writeOperator) {
		firstNum += eventTargetValue;
	} else secondNum += eventTargetValue;
	actualNums.textContent += eventTargetValue;
	console.log(firstNum, secondNum, operator, writeOperator);
}
function operate(firstNum, secondNum, operator) {
	switch (operator) {
		case '/': {
			return divide(firstNum, secondNum);
		}
		case '%': {
			return modulo(firstNum, secondNum);
		}
		case '+': {
			return sum(firstNum, secondNum);
		}
		case '-': {
			return subtract(firstNum, secondNum);
		}
		case 'X': {
			return multiply(firstNum, secondNum);
		}
	}
}
function sum(a, b) {
	return a + b;
}
function subtract(a, b) {
	return a - b;
}
function divide(a, b) {
	if (a === 0 || b === 0) return 'SYNTAX ERROR';
	return Math.abs(a / b);
}
function multiply(a, b) {
	return a * b;
}
function modulo(a, b) {
	return a % b;
}
function clearNums() {
	firstNum = '';
	secondNum = '';
	operator = '';
	writeOperator = false;
	actualNums.textContent = '0';
	finalResult.textContent = '0';
}
function isOperator(value) {
	return (
		value === '/' ||
		value === '%' ||
		value === 'X' ||
		value === '+' ||
		value === '-'
	);
}
