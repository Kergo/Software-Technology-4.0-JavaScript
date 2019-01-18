function negativeOrPositive(arr) {
    
    let newArr = [];
    for (const num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
    for (const i of newArr) {
        console.log(i);
    }
}

negativeOrPositive([3, -2, 0, -1]);