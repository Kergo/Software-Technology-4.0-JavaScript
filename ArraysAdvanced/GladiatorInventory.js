function gladiatorInventory(input) {

    let inventory = input.shift().split(' ');

    for (const tockens of input) {

        let command = tockens.split(' ').shift();
        let item = tockens.split(' ').pop();
        
        switch (command) {
            case "Buy":
                if (!inventory.includes(item)) {
                    inventory.push(item);                   
                }
                    break;
            case "Trash":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                }
                    break;
            case "Repair":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                    inventory.push(item);
                }
                    break;
            case "Upgrade":
                let itemName = item.split('-').shift();
                if (inventory.includes(itemName)) {
                    let upgrade = item.split('-').pop();
                    let index = inventory.indexOf(itemName) + 1;
                    let upgratedItem = `${itemName}:${upgrade}`;
                    inventory.splice(index, 0, upgratedItem);   
                }
                    break;
            default:
                    break;
        }   
    }

    console.log(inventory.join(' '));
}

gladiatorInventory([
'SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel'
]);