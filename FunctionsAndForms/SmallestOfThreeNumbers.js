function addAndSubtract(num1, num2, num3) {

    let sumResult = sum(num1, num2);
    let result = subtract(sumResult, num3);

    function sum(num1, num2) {
        let result = num1 + num2;
        return result;
    }

    function subtract(num1, num2) {
        let result = num1 - num2;
        return result;
    }
    
    console.log(result);
}
addAndSubtract(1,17,30);