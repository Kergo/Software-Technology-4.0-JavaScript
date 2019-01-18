function LadyBug(array) {
        

        let field = [];
        let ladies = array[1].split(' ');
        let border = array[0];

        for (let i = 0; i < ladies.length; i++) {
            field[ladies[i]] = 1;           
        }

        for (let i = 2; i < array.length; i++) {
            let args = array[i].split(' ');
            let direction = args[1];
            let position = +args[0];
            let speed = args[2];
            if (field[position] == 1) {
                if (direction == 'right') {
                    field[position]+= speed;
                }
                
                
            }
            
            console.log(position);
            
        }
        
        console.log(field);
        console.log(ladies);
        console.log(border);
        
        
        
}

LadyBug([ 3, '0 1',
'0 right 1',
'2 right 1' ]);