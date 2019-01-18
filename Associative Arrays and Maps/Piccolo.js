function piccolo(input) {

    let parkingLot = new Set();

    for (let param of input) {

        let action = param.split(', ').shift();
        let licencePlate = param.split(', ').pop();

        if (action == 'IN') {
            parkingLot.add(licencePlate);
        } else {
            parkingLot.delete(licencePlate);
        }
    }

    let sorted = [...parkingLot]
        .sort((a, b) => Number(a.substring(2, 6)) - Number(b.substring(2, 6)));

    if (sorted.length > 0) {
        for (let iterator of sorted) {
            console.log(iterator);
        }
    } else {
        console.log("Parking Lot is Empty");
    }   
}

piccolo([
'IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU'
]);