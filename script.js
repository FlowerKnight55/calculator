

function add(op1, op2){

    console.log(op1 + op2);

}

function subtract(op1, op2){
    console.log(op1 - op2);
}

function divide(op1, op2){
    console.log(op1 / op2);
}


function multiply(op1, op2){
    console.log(op1 * op2);
}

function operate(op1, op2, operator){

    switch(operator){
        case "+":
            add(op1, op2);
            break;
        case "-":
            subtract(op1, op2);
            break;
        case "*":
            multiply(op1, op2);
            break;
        case "/":
            divide(op1, op2);
            break;
    }

}


let textField = prompt("Enter text: ").split(" ");

let operand1 = parseInt(textField[0]);
let operand2 = parseInt(textField[2]);
let operator = textField[1];

operate(operand1, operand2, operator);


