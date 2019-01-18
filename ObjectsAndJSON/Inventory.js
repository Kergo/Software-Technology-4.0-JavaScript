function solve(arr) {
    
    let heroes = [];

    for (let inputRow of arr) {
        
        let [name, level, items] = inputRow.split(' / ');
        level = Number(level);
        items = items.split(', ');

        heroes.push(
            JSON.stringify({
                name,
                level,
                items
            })
        );
    }

    console.log(`[${heroes.join(',')}]`);
}

solve([
    "Isacc / 25 / Apple, GravityGun",
    "Derek / 12 / BarrelVest, DestructionSword",
    "Hes / 1 / Desolator, Sentinel, Antara"
]);