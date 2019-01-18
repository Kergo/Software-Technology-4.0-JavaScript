function topInt(arr) {
    let topIntegers = [];

    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        let isTop = true;
        for (let j = i + 1; j < arr.length; j++) {
            let nextEl = arr[j];
            if(el < nextEl){
                isTop = false;
                break;
            }
        }
        if(isTop)topIntegers.push(el);
    }
    console.log(topIntegers.join(' '));
    
}

topInt([14, 24, 3, 19, 15, 17]);