function wordsTracker(words) {
    
    let input = words.shift().split(' ');
    let sentence = new Map();

    for (let el of input) {
        sentence.set(el, 0);
    }

    for (let el of words) {
        if (sentence.has(el)) {
            let currentCount = sentence.get(el);
            currentCount++;
            sentence.set(el, currentCount);
        }
    }

    let sorted = [...sentence].sort((a, b) => b[1] - a[1]);

    for (let [word, count] of sorted) {
        console.log(`${word} - ${count}`);
        
    }
}

wordsTracker([
'this sentence', 'In','this','sentence',
'you','have','to','count','the','occurances',
'of','the','words','this','and','sentence',
'because','this','is','your','task']);