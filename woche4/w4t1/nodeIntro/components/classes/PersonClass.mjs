class Person{
    constructor(name, age, gender){
        this.name = name,
        this.age = age,
        this.gender = gender

    }

    greeting(){
        return `Hallo ${this.name}! Du bist ${this.age} und von Geschlecht ${this.gender}` 
    }
}

export default Person;