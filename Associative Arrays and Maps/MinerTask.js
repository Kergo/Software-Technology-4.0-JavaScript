function minerTask(input) {

    let resources = new Map();

    for (let i = 0; i < input.length; i += 2) {
        if (!resources.has(input[i])) {
            resources.set(input[i], Number(input[i + 1]))
        } else {
            let current = resources.get(input[i]);
            current += Number(input[i + 1]);
            resources.set(input[i], current);
        }
    }

    for (let [el, quantity] of resources) {    
        console.log(`${el} -> ${quantity}`);       
    }
}

minerTask([
'gold',
'155',
'silver',
'10',
'copper',
'17',
'gold',
'15'
]);