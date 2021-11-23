//declare variables for all buttons on calculator
const numBtns = document.querySelectorAll('[data-number]');
const operatorBtns = document.querySelectorAll('[data-operator]');
const clearBtn = document.querySelector('[data-clear]');
const deleteBtn = document.querySelector('[data-delete]');
const equalBtn = document.querySelector('[data-equal]');
const prevNumDiv = document.querySelector('[data-previous-num]');
const currentNumDiv = document.querySelector('[data-current-num]');

class Calculator {
    constructor(prevNumDiv, currentNumDiv) {
        this.prevNumDiv = prevNumDiv;
        this.currentNumDiv = currentNumDiv;
    }

    clear() {
        this.prevNum = '';
        this.currentNum = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNum(number) {
        this.currentNum = number;
    }

    chooseOperator(operator) {

    }

    solve() {

    }

    updateDisplay() {
        this.currentNumDiv.innerText = this.currentNum
    }
}

const calculator = new Calculator(prevNumDiv, currentNumDiv);

numBtns.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNum(button.innerText);
        calculator.updateDisplay();
        console.log('eventlistenerworked');
    })
});