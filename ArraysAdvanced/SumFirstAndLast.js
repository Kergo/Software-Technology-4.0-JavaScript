function sumFirstAndLast(arr) {
    
    let firstNum = Number(arr.shift());
    let lastNum = Number(arr.pop());
    let result = firstNum + lastNum;
    console.log(result); 
}

sumFirstAndLast(['20', '30', '40']);