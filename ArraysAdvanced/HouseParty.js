function houseParty(list) {
    
    let guests = [];

    for (const el of list) {

        let name = el.split(' ').shift();

        if (el.includes('is going!')) {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } 
        else if (el.includes('is not going!')) {
            if(guests.includes(name)){
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);        
            }
        }        
    }
       guests.forEach(x => console.log(x));                       
}

houseParty([
    'Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);