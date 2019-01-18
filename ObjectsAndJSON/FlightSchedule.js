function solve(input) {
    
    let [initialFlights, changedStatus, flightStatus] = input;
    flightStatus = flightStatus[0];
    let flights = {};

    for (let inputRow of initialFlights) {
        let [sector, destination] = inputRow.split(' ');
        flights[sector] = { Destination: destination, Status: 'Ready to fly'}
    }

    for (let inputRow of changedStatus) {
        let [sector, newStatus] = inputRow.split(' ');
        if (flights.hasOwnProperty(sector)) {
            //let flightObj = flights[sector];
            flights[sector].Status = newStatus;
        }
    }
    
    let filtered = Object.values(flights)
        .filter((f) => f.Status === flightStatus)
        .forEach(el => console.log(el));    
}

solve([
    ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
    ['Cancelled']
]);