function firstAndLastKNums(arr) {
    
    let kNum = arr.shift();
    let firstNums = arr.slice(0, kNum);
    let lastNums = arr.slice(arr.length - kNum);

    console.log(firstNums.join(' '));
    console.log(lastNums.join(' '));   
}

firstAndLastKNums([2, 7, 8, 9]);