function garage(arr) {
    
    let garage = new Map();

    for (let params of arr) {
        
        let number = Number(params.split(' - ').shift());
        let car = params.split(', ');
        car[0] = car[0].split(' - ').pop();
        car = car.map(x => x.replace(':', ' -'))
        
        if (!garage.has(number)) {
            garage.set(number, []);
        }

        garage.get(number).push(car);  
    }

    let sortedGarage = [...garage].sort((a, b) => a[0] - b[0]);
    for (let number of sortedGarage) { 
        console.log(`Garage № ${number[0]}`);
        number[1].forEach(e => console.log('--- ' + e.join(', ')));    
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);