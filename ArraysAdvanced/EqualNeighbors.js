function solve(matrix) {

    let counter = 0;

    for (let i = 0; i < matrix.length - 1; i++) {
        
        for (let k = 0; k < matrix[i].length; k++) {

            if (matrix.length -2 == i) {
                if (matrix[i+1][k] === matrix[i+1][k+1]) {
                    counter++;
                }
            }
              
            if(matrix[i][k] === matrix[i+1][k]){
                counter++;
            } if (matrix[i][k] === matrix[i][k+1]) {
                    counter++;                    
                }
        }      
    }
    console.log(counter);                
}

solve([
['2', '2', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']
]);