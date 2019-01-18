function legendaryFarming(input) {

    let arr = input.split(' ');
    let keyMaterials = new Map();
    let junkMaterials = new Map();

    keyMaterials.set('fragments', 0);
    keyMaterials.set('shards', 0);
    keyMaterials.set('motes', 0);

    for (let i = 0; i < arr.length; i+=2) {

        let quantity = Number(arr[i]);
        let material = arr[i+1].toLowerCase();

        if (material == 'shards' || material == 'fragments' || material == 'motes') {
            
            let currQuant = keyMaterials.get(material);
            keyMaterials.set(material, currQuant + quantity);

            if (keyMaterials.get(material) >= 250) {
                if (material == 'shards') {
                    console.log('Shadowmourne obtained!');
                } else if (material == 'fragments') {
                    console.log('Valanyr obtained!');
                } else {
                    console.log('Dragonwrath obtained!');       
                }
                currQuant = keyMaterials.get(material);
                keyMaterials.set(material, currQuant -= 250);
                break;
            }
        } else {

            if (!junkMaterials.has(material)) {
                junkMaterials.set(material, 0);
            }

            let currQuant = junkMaterials.get(material);
            junkMaterials.set(material, currQuant + quantity);
        }
    }

    let sortedKeyMaterials = [...keyMaterials].sort(sortingKeyMaterials);
    for (let [material, quantity] of sortedKeyMaterials) {
        console.log(`${material}: ${quantity}`);
    }

    let sortedJunkMaterials = [...junkMaterials].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [material, quantity] of sortedJunkMaterials) {
        console.log(`${material}: ${quantity}`);
    }

    function sortingKeyMaterials(a, b) {

        let result = b[1] - a[1];

        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        
        return result;
    }
    
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');