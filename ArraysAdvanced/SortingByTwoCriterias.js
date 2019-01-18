function sortingByTwoCriterias(input) {


    console.log(input.sort(sorting).join('\n'));
    
    function sorting(a, b) {
        
        let aLength = a.length;
        let bLength = b.length;
        let result = aLength - bLength;

        //Alphabetical sort
        if (result === 0) {
            return a.localeCompare(b);
        }

        return result;
    }                   
}

sortingByTwoCriterias(["Isacc", "Theodor", "Jack", "Harrison", "George"]);