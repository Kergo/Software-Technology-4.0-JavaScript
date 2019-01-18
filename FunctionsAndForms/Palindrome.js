function palindromeChecker(arr) {
    
    let numbersAsString = [];

    for (let i = 0; i < arr.length; i++) {
        numbersAsString.push(arr[i].toString());           
    }
    for (let i = 0; i < numbersAsString.length; i++) {
        digitChecker(numbersAsString[i]);            
    }

function digitChecker(num) {

        let reversedNumber = '';
        let isPalindrome = true;

        for (let i = num.length - 1; i >= 0; i--) {
            reversedNumber += num[i];               
        }

        if (num == reversedNumber) {
            console.log(true);
        } else {
            isPalindrome = false;
            console.log(false);
        }
    }    
}

palindromeChecker([123,323,421,121]);