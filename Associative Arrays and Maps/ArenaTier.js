function arenaTier(input) {

    let gladiators = new Map();

    for (let el of input) {

        let params = el.split(' ');

        if (params.length === 5) {
            //Add Gladiators
            let name = params[0];
            let technique = params[2];
            let skill = Number(params[4]);

            if (!gladiators.has(name)) {
                gladiators.set(name, new Map());
            } if (gladiators.has(name)) {
                let techList = gladiators.get(name);
                if (techList.has(technique)) {
                    let currSkill = techList.get(technique);
                    if (currSkill < skill) {
                        currSkill = skill;
                    }
                    techList.set(technique, currSkill);
                } else {
                    techList.set(technique, skill);
                }
            }
        } else if (params.length === 3) {
            // Fight between gladiators
            let firstG = params[0];
            let secondG = params[2];
            if (gladiators.has(firstG) && gladiators.has(secondG)) {            
                let techniqueFirst = gladiators.get(firstG);
                let techniqueSecond = gladiators.get(secondG);
                for (let el of techniqueSecond) {           
                     if (techniqueFirst.has(el[0])) {
                        let skillsFirst = techniqueFirst.values();
                        let skillsSecond = techniqueSecond.values();
                        let totalSkFirst = [...skillsFirst].reduce((a, b) => a + b, 0);
                        let totalSkSecond = [...skillsSecond].reduce((a, b) => a + b, 0);
                        if (totalSkFirst > totalSkSecond) {
                            gladiators.delete(secondG);
                        } else {
                            gladiators.delete(firstG);
                        }
                    }
                }
            }
            

        } else {
            // End
            let sortedGladiators = [...gladiators].sort(sortingGladiators);

            for (let iterator of sortedGladiators) {
                let name = iterator[0];
                let techniques = [...[iterator[1]]];
                let values = techniques[0].values();
                let total = [...values].reduce((a, b) => a + b, 0);
                console.log(`${name}: ${total} skill`);
                
                //SORT THE TECHNIQUES AND SKILLS
                let sortedTechniques = [...iterator[1]].sort(sortingTechniques);
                
                for (let [techniqueName, techniqueSkill] of sortedTechniques) {     
                    console.log(`- ${techniqueName} <!> ${techniqueSkill}`);   
                }   
            }
        }
    }

    function sortingGladiators(a, b) {

        let techniqueFirst = gladiators.get(a[0]);
        let techniqueSecond = gladiators.get(b[0]);
        let skillsFirst = techniqueFirst.values();
        let skillsSecond = techniqueSecond.values();
        let totalSkFirst = [...skillsFirst].reduce((a, b) => a + b, 0);
        let totalSkSecond = [...skillsSecond].reduce((a, b) => a + b, 0);
        let result = totalSkSecond - totalSkFirst;

        //Alphabetical sort
        if (result === 0) {
            return a[0].localeCompare(b[0]);
        }

        return result;
    }   

    function sortingTechniques(a, b) {

        let firstCriteria = b[1] - a[1];

        if (firstCriteria === 0) {
            return a[0].localeCompare(b[0]);
        }

        return firstCriteria;
    }
}

arenaTier([
'Pesho -> Duck -> 400',
'Julius -> Shield -> 150',
'Gladius -> Heal -> 200',
'Gladius -> Support -> 250',
'Gladius -> Shield -> 250',
'Pesho vs Gladius',
'Gladius vs Julius',
'Gladius vs Gosho',
'Ave Cesar'
]);