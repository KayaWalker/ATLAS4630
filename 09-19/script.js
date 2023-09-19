const peter = {
    height: '187cm',
    weight: 150,
    hairColor: 'orange',
    name: 'Peter'
};
const jack = {
    height: '193cm',
    weight: 145,
    hairColor: 'brown',
    name: 'Jack'
};

function sayHello(person) {
    console.log(`hello my name is ${person.name}, and my hair color is ${person.hairColor}`);
}

sayHello(peter);
sayHello(jack);

class Person {
    constructor(name, hairColor) {
        this.name = name
        this.hairColor = hairColor
    }

    sayHello() {
        console.log(`hello my name is ${this.name}, and my hair color is ${this.hairColor}`)
    }
}

const peterPerson = new Person('Peter', 'orange')
peterPerson.sayHello();

const jackPerson = new Person('Jack', 'brown')
jackPerson.sayHello();

console.log(peterPerson.name);
peterPerson.name = 'Kaya';
peterPerson.sayHello();