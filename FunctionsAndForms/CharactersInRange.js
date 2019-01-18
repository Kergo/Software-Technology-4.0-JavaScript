function oddAndEvenSum(number) {

    let evenNumbers = [];
    let oddNumbers = [];
    let strNum = number.toString();

     for (digit of strNum) {
        if(digit % 2 == 0) {
            evenNumbers.push(digit);
        } else {
            oddNumbers.push(digit);
        }
     }

     let sumOfEven = 0;
     let sumOfOdd = 0;

     for (digit of evenNumbers) {
         sumOfEven += +digit;
     }

     for (digit of oddNumbers) {
         sumOfOdd += +digit;
     }

    console.log(`Odd sum = ${sumOfOdd}, Even sum= ${sumOfEven}`);
}

oddAndEvenSum(3495892137259234);