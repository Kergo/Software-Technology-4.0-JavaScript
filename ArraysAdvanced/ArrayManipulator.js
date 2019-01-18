function arrayManipulator(numbers, params) {

    for (let i = 0; i < params.length; i++) {

        let [command, index] = params[i].split(' ');
        index = Number(index);
        let nums = params[i].split(' ').slice(2); 
        nums = nums.map(Number);    

        switch (command) {
            case "add":
                add(nums, index);
                    break;
            case "addMany":
                addMany(nums, index);
                    break;
            case "contains":
                console.log(numbers.indexOf(index));      
                    break;
            case "remove":
                numbers.splice(index, 1);
                    break;
            case "shift":
                shiftPossitions(index);
                    break;
            case "sumPairs":
                sumPairs(numbers);
                    break;        
            case "print":
                //let output = numbers.map(Number);
                console.log(numbers);
                    break;
            default:
                break;
        }      
    }

    function add(num, i) {
        let bum = Number(num);
        numbers.splice(i, 0, bum); 
    }

    function addMany(nums, i) {
        numbers.splice(i, 0, ...nums);    
    } 

    function shiftPossitions(index) {
        for (let i = 0; i < index; i++) {
            let first = numbers.shift();
            numbers.push(first);
        }     
    }
    function sumPairs(input) {
        
        let merged = [];

        for (let i = 0; i < input.length - 1; i += 2) {
            merged.push(input[i] + input[i + 1]);
        }

        if (input.length %2 == 1) {
            merged.push(input.pop());
        }

        numbers = [...merged];
    }    
}

arrayManipulator(
    [2, 2, 4, 2, 4],
    ["add 1 4", "sumPairs", "print"]
);