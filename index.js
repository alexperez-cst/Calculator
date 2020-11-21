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
		return isEqual();
	}
	if (eventTargetValue === '.') {
		return isDot();
	}
	if (eventTargetValue === 'C') {
		return deleteValue();
	}
	if (eventTargetValue === 'AC') {
		return clearNums();
	}
	isNum(eventTargetValue);
}
function isNum(eventTargetValue) {
	if (isOperator(eventTargetValue) && writeOperator === true) {
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
	console.log(firstNum.slice(0, 3), secondNum, operator, writeOperator);
}
function isDot() {
	if (firstNum.includes('.') && !writeOperator) return;
	if (secondNum.includes('.')) return;
	isNum('.');
}
function isEqual() {
	if (!secondNum || !firstNum) {
		finalResult.textContent = !firstNum ? 0 : firstNum;
		return;
	}
	console.log(firstNum, secondNum, operator);
	finalResult.textContent = operate(+firstNum, +secondNum, operator);
	firstNum = finalResult.textContent;
	secondNum = '';
	writeOperator = false;
	return;
}
function deleteValue() {
	if (writeOperator && secondNum !== '') {
		secondNum = deleteNum(secondNum);
	} else if (
		isOperator(actualNums.textContent[actualNums.textContent.length - 1])
	) {
		operator = deleteNum(operator);
		writeOperator = false;
	} else firstNum = deleteNum(firstNum);
	actualNums.textContent = deleteContent(actualNums);
}
function deleteNum(str) {
	return str.slice(0, str.length - 1);
}
function deleteContent(str) {
	return str.textContent.slice(0, str.textContent.length - 1);
}
function operate(firstNum, secondNum, operator) {
	switch (operator) {
		case '/':
			return divide(firstNum, secondNum);
		case '%':
			return modulo(firstNum, secondNum);
		case '+':
			return sum(firstNum, secondNum);
		case '-':
			return subtract(firstNum, secondNum);
		case 'X':
			return multiply(firstNum, secondNum);
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
	actualNums.textContent = '';
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
