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
        this.clear();
    }

    clear() {
        this.prevNum = '';
        this.currentNum = '';
        this.operator = undefined;
    }

    delete() {
        this.currentNum = this.currentNum.slice(0, -1);
    }

    appendNum(number) {
        if(number === '.' && this.currentNum.includes('.')) return;
        this.currentNum = this.currentNum.toString() + number.toString();
    }

    chooseOperator(operator) {
        if(!this.currentNum) return;
        if(this.prevNum !== '') {
            this.solve();
        }
        this.operator = operator;
        this.prevNum = this.currentNum;
        this.currentNum = '';
    }

    solve() {
        let answer;
        const prev = parseFloat(this.prevNum);
        const current = parseFloat(this.currentNum);
        if (isNaN(prev) || isNaN(current)) return;
        switch(this.operator) {
            case '+':
                answer = prev + current;
                break;
            case '-':
                answer = prev - current;
                break;
            case 'x':
                answer = prev * current;
                break;
            case '÷':
                answer = prev / current;
                break;
            default:
                return;
        }
        this.currentNum = answer;
        this.operator = undefined;
        this.prevNum = '';
    }

    updateDisplay() {
        this.currentNumDiv.innerText = this.currentNum;
        if(this.operator != null) {
            this.prevNumDiv.innerText = 
            `${this.prevNum} ${this.operator}`
        }
        else this.prevNumDiv.innerText = this.prevNum;
    }
}

const calculator = new Calculator(prevNumDiv, currentNumDiv);

numBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.appendNum(btn.innerText);
        calculator.updateDisplay();
    })
});

operatorBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        calculator.chooseOperator(btn.innerText);
        calculator.updateDisplay();
    })
});

equalBtn.addEventListener('click', button => {
    calculator.solve();
    calculator.updateDisplay();
});

clearBtn.addEventListener('click', button => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteBtn.addEventListener('click', button => {
    calculator.delete();
    calculator.updateDisplay();
});