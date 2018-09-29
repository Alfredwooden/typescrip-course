class Person {
    name: string;
    private type: string;
    protected age: number = 25;
    
    constructor (name: string, public username: string) {
        this.name = name;
    }

    printAge() {
        console.log('Edad: ' + this.age);
        this.setType('Young Guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }

}

const person = new Person('Alfred', 'Alfredwooden');
console.log(person);
person.printAge();
// person.setType('Cool guy!'); --- Won't work with private method
