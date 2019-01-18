function printCharactersInRange(charOne, charTwo) {
    
    let charInBetween = [];
    let charOneNum = charOne.charCodeAt(0);
    let charTwoNum = charTwo.charCodeAt(0);
    if (charOneNum > charTwoNum) {
        let num = charOneNum;
        charOneNum = charTwoNum;
        charTwoNum = num;
    }

    for (let i = charOneNum +1; i < charTwoNum; i++) {
        charInBetween.push(String.fromCharCode(i));   
    }

    console.log(charInBetween.join(' '));    
}

printCharactersInRange('C', '#');