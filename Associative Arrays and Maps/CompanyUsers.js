function companyUsers(input) {

    let company = new Map();

    for (let el of input) {
        let companyName = el.split(' -> ').shift();
        let employeeId = el.split(' -> ').pop();
        if (!company.has(companyName)) {
            company.set(companyName, new Set())            
        }
        if (company.has(companyName)) {
            let list = company.get(companyName)
            list.add(employeeId);
            company.set(companyName, list)
        }
    }

    let orderedComp = [...company].sort((a, b) => a[0].localeCompare(b[0]));

    for (let [name, empList] of orderedComp) {
        console.log(name);
        for (let ppl of empList) {
             console.log(`-- ${ppl}`);   
        }        
    }
}

companyUsers([
'SoftUni -> AA12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345',
'HP -> BB12345'
]);