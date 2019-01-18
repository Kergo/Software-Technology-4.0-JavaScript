function sorting(input) {
    
    let deccending = input.slice().sort((a,b) => b-a);
    let sorted = [];

    for (let i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            sorted.push(deccending.shift());
        } else {
            sorted.push(deccending.pop());
        }  
    }

    console.log(sorted.join(' '));                    
}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);