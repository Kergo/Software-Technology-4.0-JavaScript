function shortestAndLongestWord(str) {

    let words = str.split(' ');
    let shortestWord = 55;
    let longestWord = 0;
    let indexOfShortest
    let indexOfLongest
    
    for (let i = 0; i < words.length; i++) {
        if (shortestWord > words[i].length) {
            shortestWord = words[i].length;
            indexOfShortest = i;
        }
        if (longestWord < words[i].length) {
            longestWord = words[i].length
            indexOfLongest = i;
        }            
    }
    console.log(`Longest -> ${words[indexOfLongest]}`);
    console.log(`Shortest -> ${words[indexOfShortest]}`);
    
    
}

shortestAndLongestWord('Hello people, are you familiar with the terms of application at the software university?')