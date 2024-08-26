

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

function operate(evaluate){

    switch(evaluate[1]){
        case " + ":
            add(evaluate[0], evaluate[2]);
            break;
        case " - ":
            subtract(evaluate[0], evaluate[2]);
            break;
        case " * ":
            multiply(evaluate[0], evaluate[2]);
            break;
        case " / ":
            divide(evaluate[0], evaluate[2]);
            break;
    }

}

let buttons = document.querySelectorAll(".button");
let screen = document.querySelector(".screen");

let  evaluate = [];


buttons.forEach(function(button, index){
    button.addEventListener("click", function(event){

  
        

        if(button.textContent === "+"){
            event.preventDefault();
        }
        else{
            screen.textContent = screen.textContent + button.textContent;
        }
        
    });
});






//let textField = prompt("Enter text: ").split(" ");

// let operand1 = parseInt(textField[0]);
// let operand2 = parseInt(textField[2]);
// let operator = textField[1];



// operate(operand1, operand2, operator);



let count = 0;

buttons.forEach(function(button){
    button.addEventListener("click", function(){

        screen.textContent = screen.textContent + " " + button.textContent;
        count++;
        
    });
});






//let textField = prompt("Enter text: ").split(" ");

let operand1 = parseInt(textField[0]);
let operand2 = parseInt(textField[2]);
let operator = textField[1];



operate(operand1, operand2, operator);
