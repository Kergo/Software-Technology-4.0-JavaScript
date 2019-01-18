function solve(arr) {

    class Product {
        constructor(product, quantity) {
            this.product = product;
            this.quantity = quantity;
        }
    }

    let inventory = [];
    //let bla = {...arr[0]}
    //console.log(bla);
    

    for (let i = 0; i < 1; i++) {
        for (let k = 0; k < arr[i].length; k+=2) {
            let product = arr[i][k];
            let quantity = Number(arr[i][k + 1]);

            //let item = new Product(product, quantity);
            inventory.push(product, quantity);
        }
        
        console.log(inventory);
        
    }
    let bla = {...inventory}
    console.log(bla);
    

    
}

solve([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
]);