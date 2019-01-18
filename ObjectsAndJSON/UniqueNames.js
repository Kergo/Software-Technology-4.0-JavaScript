function solve(arrNames) {
    
    let names = new Set();

    for (let name of arrNames) {
        names.add(name);
    }

    [...names.keys()].sort((a, b) => {
        return a.length - b.length || a.localeCompare(b);
    }).forEach(n => console.log(n));
}

solve([
    "Ashton",
    "Kutcher",
    "Ariel",
    "Lilly",
    "Keyden",
    "Aizen",
    "Billy",
    "Braston"
]);