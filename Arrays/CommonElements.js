function train(params) {
    
    let wagons = params
        .shift()
        .split(' ')
        .map(Number);

    let capacity = params.shift();
    
    for (let i = 0; i < params.length; i++) {

        if(params[i].includes('Add')) {
            wagons.push(params[i].split(' ').pop());   
        } else {
            addPassangers(Number(params[i]));
        }
        
        
        
    }

        console.log(wagons.join(' '));
        console.log(capacity);

        function addPassangers(passangers) {
            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passangers <= capacity) {
                    wagons[i] += passangers;
                    break;
                }                
            }
        }
        
        
}

train([
'32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']);