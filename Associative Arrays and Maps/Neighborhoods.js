function solve(arr) {

    let neighborhoods = arr.shift().split(', ');
    let neighborhoodMap = new Map();

    for (let el of neighborhoods) {
        neighborhoodMap.set(el, []);
    }

    for (let el of arr) {

        let neighborhood = el.split(' - ').shift();
        let person = el.split(' - ').pop();
        
        if (neighborhoodMap.has(neighborhood)) {
            neighborhoodMap.get(neighborhood).push(person);
        }
    }

    let sorted = [...neighborhoodMap]
        .sort((a, b) => b[1].length - a[1].length);

    for (let [name, people] of sorted) {
        console.log(`${name}: ${people.length}`);
        console.log(`${people.map(a => '--' + a).join('\n')}`);
    }    
}

solve([
'Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy'
]);