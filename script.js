

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

const calculator = document.querySelector(".calculator-container");
const keys = calculator.querySelector(".btn-container");

const screen = document.querySelector(".screen");

keys.addEventListener("click", e =>{
    if(e.target.matches('button')){
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayedNum = screen.textContent;
    
        if(!action){
            if(displayedNum === "0"){
                screen.textContent = keyContent;
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
        }

        if(action === "decimal"){
            screen.textContent = displayedNum + ".";
        }

        if(action === "clear"){
            screen.textContent = "";
        }

        if(action === "calculate"){
            console.log("equal key!");
        }
    }
})




