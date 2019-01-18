function buildWall(params) {

    let wall = params.shift().split(', ').map(Number);
    let target = 30;
    let concrete = 195;
    let cost = 1900;
    let dailyCrews = [];

    while (wall.length > 0) {        
        let sections = wall.length;
        dailyCrews.push(sections);
        wall = wall.map(feet => feet + 1).filter(feet => feet < target);
    }

    dailyCrews = dailyCrews.map(x => x * concrete);
    let totalCosts = 0;

    for (let iterator of dailyCrews) {
        totalCosts += iterator * cost;
    }

    console.log(dailyCrews.join(', '));
    console.log(totalCosts + " pesos");    
}

buildWall(["17, 22, 17, 19, 17"]);