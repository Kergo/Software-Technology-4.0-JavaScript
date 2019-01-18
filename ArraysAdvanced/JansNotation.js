function solve(params) {

    let numbers = [];

    for (let iterator of params) {

        if (typeof iterator === "string") {

            let operator = iterator;

            switch (operator) {
                case "+":
                    add();
                        break;
                case "-":
                    substract();
                        break;
                case "*":
                    multiply();
                        break;
                case "/":
                    divide();
                        break;               
                default:
                    break;
            }
            
        } else {
            numbers.push(iterator);
        }
    }
    
    function add() {

        if (numbers.length < 2) {
            console.log("Error: not enough operands!");
            numbers.splice(0);
            return;
        }

       let firstNum = numbers.pop();
       let secondNum = numbers.pop();
       let result = firstNum + secondNum;
       numbers.push(result);
    }

    function substract() {

        if (numbers.length < 2) {
            console.log("Error: not enough operands!");
            numbers.splice(0);
            return;
        }

        let firstNum = numbers.pop();
        let secondNum = numbers.pop();
        let result = secondNum - firstNum;
        numbers.push(result);
    }

    function multiply() {

        if (numbers.length < 2) {
            console.log("Error: not enough operands!");
            numbers.splice(0);
            return;
        }

        let firstNum = numbers.pop();
        let secondNum = numbers.pop();
        let result = secondNum * firstNum;
        numbers.push(result); 
    }

    function divide() {

        if (numbers.length < 2) {
            console.log("Error: not enough operands!");
            numbers.splice(0);
            return;
        }

        let firstNum = numbers.pop();
        let secondNum = numbers.pop();
        let result = secondNum / firstNum;
        numbers.push(result);
    }

    if (numbers.length == 1) {
        console.log(numbers[0]);
    }else if (numbers.length == 0) {

    }else {
        console.log("Error: too many operands!");
    }
}

solve([
    15,
    '*',
])