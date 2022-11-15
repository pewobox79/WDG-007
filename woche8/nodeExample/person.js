export class Person{
    constructor(name, age){
        this.age = age,
        this.name = name
    }

    greeting(){
        console.log(`Hallo ${this.name}. Du bist wohl ${this.age} Jahre alt....`)
    }
}

