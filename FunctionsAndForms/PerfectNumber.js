function perfectNumber(num) {
    
    let divisors = [];
    let sum = 0;
    for (let i = 1; i < num; i++) {      
        if (num % i == 0) {
            divisors.push(i);
            sum += i;
        }    
    }
    if (sum == num) {
        console.log("gg");
        
    }
    console.log(divisors);
    
}

perfectNumber(6)