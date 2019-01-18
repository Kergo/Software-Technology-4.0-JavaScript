function solve(arr) {

    class Towns {
        constructor (town, latitude, longitude){
            this.Town = town,
            this.Latitude = +Number(latitude).toFixed(2),
            this.Longitude = +Number(longitude).toFixed(2)
        }
    }

    let towns = [];

    for (let i = 1; i < arr.length; i++) {
        let input = arr[i].split('|');
        let name = input[1].trim();
        let latitude = Number(input[2].trim());
        let longitude = Number(input[3].trim());
        let town = new Towns(name, latitude, longitude);
        towns.push(town);
    }

    console.log(JSON.stringify(towns));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);