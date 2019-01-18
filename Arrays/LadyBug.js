function LadyBug(array) {
        

        let field = [];
        let ladies = array[1].split(' ');
        let border = array[0];
        // filling the field with bugs
        for (let i = 0; i < ladies.length; i++) {
            field[ladies[i]] = 1;           
        }
        //taking arguments and implementing them
        for (let i = 2; i < array.length; i++) {
            let args = array[i].split(' ');
            let direction = args[1];
            let position = +args[0];
            let speed = args[2];

            //check if there is a bug on that position
            if (field[position] == 1) {

                if (direction == 'right') {
                    //Move ladyBug to the right
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