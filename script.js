

function add(op1, op2){
    return op1 + op2;
}

function subtract(op1, op2){
    return op1 - op2;
}

function divide(op1, op2){
    return op1 / op2;
}


function multiply(op1, op2){
    return op1 * op2;
}

function operate(operand1, operand2, operator){

    switch(operator){
        case "add":
            return add(operand1, operand2);
            break;
        case "subtract":
            return subtract(operand1, operand2);
            break;
        case "multiply":
            return multiply(operand1, operand2);
            break;
        case "divide":
            return divide(operand1, operand2);
            break;
    }

}


function getOperator(action){
    
    switch(action){
        case "add":
            return " + ";
            break;
        case "subtract":
            return " - ";
            break;
        case "multiply":
            return " x ";
            break;
        case "divide":
            return " ÷ ";
            break;
    }
}



const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".btn-container");

const screen = document.querySelector(".screen");

keys.addEventListener("click", e =>{
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = screen.textContent;
        const previousKeyType = calculator.dataset.previousKeyType;
    
        
        if(!action){
            if(displayedNum === "0" || previousKeyType === "operator"){
                screen.textContent = displayedNum + keyContent;
            }
            else{
                screen.textContent = displayedNum + keyContent;
            }
        }

        if(
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){
            
            key.classList.add("is-depressed");
            calculator.dataset.previousKeyType = "operator";

            screen.textContent = displayedNum + getOperator(action);

            calculator.dataset.firstValue = displayedNum;
            calculator.dataset.operator = action;
        }

        if(action === "decimal"){
            screen.textContent = displayedNum + ".";
        }

        if(action === "clear"){
            screen.textContent = "";
        }

        if(action === "calculate"){
            const firstValue = calculator.dataset.firstValue;
            const operator = calculator.dataset.operator;
            const secondValue = displayedNum.charAt(displayedNum.length - 1);
            
            console.log(firstValue + operator + secondValue);

            screen.textContent = operate(parseFloat(firstValue), parseFloat(secondValue), operator);
        }

        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));


    }
})




