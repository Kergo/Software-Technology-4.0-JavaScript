function solve(firstName, lastName, age) {
    let personInfo = {
        firstName,
        lastName,
        age
    }

    for (let key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);
        
    }
}

solve("Peter", "Pan", "20");