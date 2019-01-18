function cardGame(input) {

    let players = new Map();

    for (let el of input) {
        let name = el.split(':').shift();
        let cards = el.split(', ');
        cards[0] = cards[0].split(': ').pop();

        if (!players.has(name)) {
           players.set(name, [])
        }

        if (players.has(name)) {
            let hands = players.get(name);
            for (let el of cards) {
                if (!hands.includes(el)) {
                    hands.push(el);
                }
            }
            cards = hands;
        } 

        players.set(name, cards);     
    }

    for (let el of players) {
        let total = players.get(el[0]);
        total = handsPower(total);
        players.set(el[0], total)
    }

    function handsPower(cards) {

        let poweredHand = 0;
        
        for (let el of cards) {

            let card = el[0];
            let value = el[1];

            if (el.length === 3) {
                card = el[0] + el[1]
                value = el[2];
            }
            
        switch (card) {
            case '2':
                card = Number(2);
                    break;
            case '3':
                card = Number(3);
                    break;
            case '4':
                card = Number(4);
                    break;
            case '5':
                card = Number(5);
                    break;
            case '6':
                card = Number(6);
                    break;
            case '7':
                card = Number(7);
                    break;
            case '8':
                card = Number(8);
                    break;
            case '9':
                card = Number(9);
                    break;
            case '10':
                card = Number(10);
                    break;
            case 'J':
                card = Number(11);
                    break;
            case 'Q':
                card = Number(12);
                    break;
            case 'K':
                card = Number(13);
                    break;
            case 'A':
                card = Number(14);
                    break;
            default:
                break;
        }

        switch (value) {
            case 'S':
                value = Number(4);
                    break;
            case 'H':
                value = Number(3);
                    break;
            case 'D':
                value = Number(2);
                    break;
            case 'C':
                value = Number(1);
                    break;
            default:
                break;
        }

        let power = value * card;
        poweredHand += power;
    }

        return poweredHand;
    }

    for (let [name, hand] of players) {
        console.log(`${name}: ${hand}`);
        
    }   
}

cardGame([
'Pesho: 2C, 4H, 9H, AS, QS',
'Slav: 3H, 10S, JC, KD, 5S, 10S',
'Peshoslav: QH, QC, QS, QD',
'Slav: 6H, 7S, KC, KD, 5S, 10C',
'Peshoslav: QH, QC, JS, JD, JC',
'Pesho: JD, JD, JD, JD, JD, JD'
]);