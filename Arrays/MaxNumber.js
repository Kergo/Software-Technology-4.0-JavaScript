function MagicSum(arr) {
    
        let numbers = arr[0].split(" ");
        let result = [];
        let sum = +arr[1];
    for (let i = 0; i < numbers.length; i++) {
        let currentSum = 0;
        for (let k = i + 1; k < numbers.length; k++) {
            currentSum = +numbers[i] + +numbers[k];
            if (currentSum === +sum) {
                console.log(`${numbers[i]} ${numbers[k]}`);    
                //result.push(numbers[i])
                //result.push(numbers[k]);
            }
            currentSum = 0;
        }
        
    }
}

MagicSum(['14 20 60 13 7 19 8', '27']);