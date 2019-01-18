function partyTime(input) {

    let vip = new Set();
    let regular = new Set();

    while (input[0] != "PARTY") {
        let guest = input.shift();
        if (isNumber(guest[0])) {
            vip.add(guest);
        } else {
            regular.add(guest);            
        }
    }

    for (let i = 1; i < input.length; i++) {
        
        if (vip.has(input[i])) {
            vip.delete(input[i])
        } else if (regular.has(input[i])) {
            regular.delete(input[i]);
        }    
    }

    console.log(vip.size + regular.size);

    for (let iterator of vip) {
        console.log(iterator);
    }

    for (let iterator of regular) {
        console.log(iterator);
    }

    function isNumber(char) {
        char = Number(char);
        if (char === 1 || char === 2 || char === 3 || 
            char === 4 || char === 5 || char === 6 || 
            char === 7 || char === 8 || char === 9 || 
            char === 0){
                return true;
            } else {
                return false;
            }
    }
}

partyTime([
'7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
])