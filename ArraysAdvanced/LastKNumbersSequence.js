function lastKNumbersSequence(n, k) {
    
    let result = [1];
    
    for (let i = 1; i < n; i++) {
        let start = Math.max(0, i - k);

        let lastThreeElements = result.slice(start);

        let sum = 0;
        for (const number of lastThreeElements) {
            sum += number;
        }

        result.push(sum);
    }

    console.log(result.join(' '));   
}

lastKNumbersSequence(6, 3);