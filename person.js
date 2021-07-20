class Person {
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;

    }
    
    introduction(){

        console.log("My name is"+ this.name+ "and I am "+ this.age+ "years old and I am a" +this.gender);
    }
}

module.exports = Person;