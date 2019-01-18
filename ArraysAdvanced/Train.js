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

        function addPassangers(passangers) {

            for (let i = 0; i < wagons.length; i++) {
                if (wagons[i] + passangers <= capacity) {
                    wagons[i] += passangers;
                    break;
                }                
            }
        }

        console.log(wagons.join(' '));               
}