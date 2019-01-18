function phoneBook(arr) {

    let phoneBook = new Map();

    for (let el of arr) {

        let input = el.split(' ');

        phoneBook.set(input[0], input[1]);
    }

    for (let [name, number] of phoneBook) {
        
        console.log(`${name} -> ${number}`); 
    }
}

phoneBook([
'Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344'
]);