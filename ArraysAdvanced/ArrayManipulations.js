function arrayManipulations(arr) {

    let numbers = arr
        .shift()
        .split(' ')
        .map(Number);

        for (let i = 0; i < arr.length; i++) {

            let [command, firstNum, secondNum] = arr[i].split(' ');

            firstNum = Number(firstNum);
            secondNum = Number(secondNum);

            switch (command) {
                case "Add":
                    numbers.push(firstNum);
                        break;
                case "Remove":
                    numbers = numbers.filter(el => el !== firstNum);
                        break;
                case "RemoveAt":
                    numbers.splice(firstNum, 1);
                        break;
                case "Insert":
                    numbers.splice(secondNum, 0, firstNum);                
                default:
                    break;
            }
        }
    
    console.log(numbers.join(' '));
} 

arrayManipulations([
    '4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);