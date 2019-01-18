function smallestTwoNumbers(arr) {
    
    let result = arr.sort((a, b) => a - b).slice(0, 2).forEach(e => console.log(e));

    //console.log(result.join(' '));       
}

smallestTwoNumbers([10, 15, 5, 25]);