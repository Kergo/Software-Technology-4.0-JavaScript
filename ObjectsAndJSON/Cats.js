function solve(arrCats) {    

    class Cat {
        constructor(name, age) {
            this.name = name
            this.age = age
        }

        meow() {
            return `${this.name}, age ${this.age} says Meow`;
        }
    }

    for (let catData of arrCats) {
        let catDataParts = catData.split(' ');
        let name = catDataParts[0];
        let age = catDataParts[1];

        let cat = new Cat(name, age);

        console.log(cat.meow());
    }
}

solve(['Mellow 2', 'Tom 5']);