function storage(arr) {
    
    let products = new Map();

    for (let el of arr) {

        let input = el.split(' ');
        let product = input[0];
        let quantity = Number(input[1]);
        
        if (products.has(product)) {
            quantity += products.get(product);
        }
        products.set(product, quantity);
    }

    for (let [product, quantity] of products.entries()) {
        console.log(`${product} -> ${quantity}`);
    }
}

storage([
'tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']);