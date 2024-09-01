

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

    console.log(operand1)

    switch(operator){
        case "+":
            return add(operand1, operand2);
            break;
        case "-":
            return subtract(operand1, operand2);
            break;
        case "x":
            return multiply(operand1, operand2);
            break;
        case "÷":
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

            calculator.dataset.previousKeyType = "number";

        }

        if(
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ){


            let parts = displayedNum.split(" ");

            let firstValue = parseInt(parts[0]);
            let operator = parts[1];
            let secondValue = parseInt(parts[2]);



            if(previousKeyType === undefined || previousKeyType === "operator"){
                return e.preventDefault();
            }



            if(firstValue && operator && previousKeyType !== "operator"){

                console.log(firstValue + operator + secondValue);
                screen.textContent = operate(parseFloat(firstValue), parseFloat(secondValue), operator) + getOperator(action);
                calculator.dataset.previousKeyType = "operator";
            }
            else{

                key.classList.add("is-depressed");
                screen.textContent = displayedNum + getOperator(action);
    
                calculator.dataset.firstValue = displayedNum;
                calculator.dataset.operator = action;
    
                calculator.dataset.previousKeyType = "operator";
            }
            
            

        }

        if(action === "decimal"){
            
            
            if(previousKeyType === "operator"){
                screen.textContent = "0.";
            }
            else if(!displayedNum.endsWith(".")){
                screen.textContent = displayedNum + ".";
            }

            
            calculator.dataset.previousKeyType = "decimal";
        }

        if(action === "clear"){
            screen.textContent = "";
            calculator.dataset.previousKeyType = "clear";
        }

        if(action === "calculate"){
            let parts = displayedNum.split(" ");

            let firstValue = parseFloat(parts[0]);
            let operator = parts[1];
            let secondValue = parseFloat(parts[2]);
            



            console.log(firstValue + operator + secondValue);

            screen.textContent = operate(firstValue, secondValue, operator);

            calculator.dataset.previousKeyType = "calculate";
        }

        if(action === "percent"){
            
            let parts = displayedNum.split(" ");

            let firstValue = parts[0];
            let operator = parts[1];
            let secondValue = parts[2];

            if(previousKeyType === "operator"){
                screen.textContent = "0";
            }
            else if(firstValue && operator){
                
                screen.textContent = firstValue + " " + operator + " " + (secondValue / 100);

            }
            else{
                screen.textContent = displayedNum / 100;
            }

           
        }


        Array.from(key.parentNode.children).forEach(k => k.classList.remove('is-depressed'));


    }
})




