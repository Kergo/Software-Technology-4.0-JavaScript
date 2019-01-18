function solve(arr) {
    
    let words = new Map();

    for (let el of arr) {
        
        let count = 1;

        if (words.has(el)) {
            count = words.get(el);
            count += 1;
        }

        words.set(el, count);
    }

    let sorted = [...words]
        .sort((a, b) => b[1] - a[1]);

    for (let [word, occurrence] of sorted) {
        console.log(`${word} -> ${occurrence} times`);
    }
}

solve([
    "Here", 
    "is", 
    "the", 
    "first", 
    "sentence", 
    "Here", 
    "is", 
    "another", 
    "sentence", 
    "And", 
    "finally", 
    "the", 
    "third", 
    "sentence"
]);