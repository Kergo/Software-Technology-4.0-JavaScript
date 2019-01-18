function CommonElements(arrOne, arrTwo) {

    arrOne.forEach(element => {
        if (arrTwo.includes(element)) {
            console.log(element);     
        }
      });
    
} 
CommonElements(["Hey", "hello", 2, 4, "Pesho", "e"],
 ["Pecho", 10, "hey", 4, "hello", "2"]);