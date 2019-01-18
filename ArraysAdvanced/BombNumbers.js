function bombNumbers(numbers, param) {

    let [bomb, power] = param;
    
    for (let i = 0; i < numbers.length; i++) {
        if (bomb === numbers[i]) {
            let start = Math.max(0, i - power);
            let count = power * 2 + 1;
            numbers.splice(start, count);
            i = 0;
        }
    }
    
    let sum = 0;

    for (const el of numbers) {
        sum += el;
    }

    console.log(sum);
    
    
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);