function armies(arr) {
    
    let leadersAndArmy = new Map();

    for (let params of arr) {
        
        if (params.includes('arrives')) {
            let index = params.indexOf('arrives');
            let leader = params.slice(0, index - 1);
            leadersAndArmy.set(leader, new Map());
        } else if (params.includes('defeated')) {
            let index = params.indexOf('defeated');
            let leader = params.slice(0, index - 1);
            leadersAndArmy.delete(leader)
        } else {
            if (params.includes(':')) {
                let leader = params.split(':').shift();
                let startIndexArmy = params.indexOf(':');
                let endIndexArmy = params.indexOf(',');
                let army = params.slice(startIndexArmy + 2, endIndexArmy);
                let armyCount = Number(params.slice(endIndexArmy + 2));

                if (leadersAndArmy.has(leader)) {
                    let currArmy = leadersAndArmy.get(leader);
                    if (!currArmy.has(army)) {
                        currArmy.set(army, 0);
                    }
                    let currCount = currArmy.get(army);
                    currArmy.set(army, currCount + armyCount);
                }                
            } else {
                let newArmy = params.split(' + ').shift();
                let armyCount = Number(params.split(' + ').pop());
                for (let [leader, army] of leadersAndArmy) {
                    if (army.has(newArmy)) {
                        let currCount = army.get(newArmy);
                        army.set(newArmy, currCount + armyCount);
                    }
                }
            }
        }
    }


    //FINISH SORTING AND PRINTING
    
    
    



    function sortingLeaders(a, b) {
        
        let armyFirst = leadersAndArmy.get(a[0]);
        let armySecond = leadersAndArmy.get(b[0]);
        let countFirst = armyFirst.values();
        let countSecond = armySecond.values();
        let totalCountFirst = [...countFirst].reduce((a, b) => a + b, 0);
        let totalCountSecond = [...countSecond].reduce((a, b) => a + b, 0);
        let result = totalCountFirst - totalCountSecond;

        return result;
    }
    console.log();

}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000', 'Juard + 1350',
    'Britox + 4500', 'Porter arrives',
    'Porter: Legion, 55000', 'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);