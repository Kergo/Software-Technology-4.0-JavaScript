function searchForANumber(input, params) {

    let [take, remove, find] = params;
    let numbers = input.slice(0, take)
    numbers.splice(0, remove)  
    let counter = 0;
    
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === find) {
            counter++;
        }
    }

    console.log(`Number ${find} occurs ${counter} time.`);    
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);