function solve(words) {
    
    let countMap = new Map();

    let list = words.split(' ').map(a => a.toLowerCase());

    for (let el of list) { 
        if (countMap.has(el)) {
            let count = countMap.get(el);
            count++;
            countMap.set(el, count);
        } else {
            countMap.set(el, 1);
        }
    }

    let filtered = [...countMap].filter((a) => a[1] % 2 == 1);
    let output = '';
    
    for (let i = 0; i < filtered.length; i++) {
        output += (`${filtered[i][0]} `);        
    }
   
    console.log(output);
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');