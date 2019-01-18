function solve(params, input) {

    let area = [];

    for (let iterator of params) {
        area.push(iterator.split(' ').map(Number));
    }
    
    /*
    • "breeze {index}" – index is the row where all column’s value drops by 15 PM
    • "gale {index}" – index is the column in all rows where value drops by 20 PM
    • "smog {value}" – all blocks in the map increase equally by the given value’s PM
    */

    for (let iterator of input) {

        let force = iterator.split(' ').shift();
        let value = Number(iterator.split(' ').pop());

        switch (force) {
            case "breeze":
                breeze(value);
                break;
            case "gale":
                gale(value);
                break;
            case "smog":
                smog(value);
                break;
            default:
                break;
        }

    }

    function breeze(index) {

        for (let r = index; r < index + 1; r++) {
            for (let c = 0; c < area[r].length; c++) {
                
                area[r][c] -= 15;                 

                if (area[r][c] < 0) {
                    area[r][c] = 0;
                }
            }  
        }
    }

    function gale(index) {

        for (let r = 0; r < area.length; r++) {
            for (let c = index; c < index + 1; c++) {

                area[r][c] -= 20;

                if (area[r][c] < 0) {
                    area[r][c] = 0;
                }
            }
        }
    }

    function smog(value) {
        
        for (let r = 0; r < area.length; r++) {
            for (let c = 0; c < area[r].length; c++) {

                area[r][c] += value;     
            }            
        }
    }

    let pollutesAreas = [];

    for (let r = 0; r < area.length; r++) {
        for (let c = 0; c < area[r].length; c++) {
            if (area[r][c] >= 50) {
                let coordinates = `[${r}-${c}]`;
                pollutesAreas.push(coordinates);
            }        
        }        
    }

    if (pollutesAreas.length > 0) {
        console.log(`Polluted areas: ${pollutesAreas.join(', ')}`);        
    } else {
        console.log("No polluted areas"); 
    }
}

solve([
"5 7 72 14 4",
"41 5 37 27 33",
"23 16 27 42 12",
"2 20 28 39 14",
"16 34 31 10 24"
],
["breeze 1", "gale 2", "smog 25"])