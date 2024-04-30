//OOP is like a style of programming where we model our system as a variety of models that interacct with each other

//SCHOOL
/*
THIS IS HOW WE REPRESENT OOP IN PROGRAMMING LANGUAGES, JAVASCRIPT IS NOT ONE OF THEM
Person
-name
-age
Teacher
-salary
-teach()
-grade()
Student
-greet()
Class
-students
-Teacher
*/
class Person{ //this class is the blueprint for creating an object
    //attributes
    name;
    age;
    constructor(name,age){//run every time this class is initiated
        this.name = name //wherever object call this, this makes a new property and make equal to the name is passed into the constructor
        this.age = age 
    }
    //to define a method
    sayHi(shouldSayBye){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
        if(shouldSayBye){
            console.log("Bye");
        }
    }
}
//const person is an instance. Instance is like an individual creation of this class Person
const person = new Person("Tim", 10); //create a new object
const person2 = new Person("Jessi", 21);
console.log(person, person2);//OUTPUT was an object Person { name: "Tim", age: 10}
person.sayHi(false);//this does not return the bye sentence
person2.sayHi(true);//returns the bye sentence

/*A constructor is a special method that is automatically executed when a new instance of a class is created
using the `new` keyword. Any code inside the constructor is executed, this allows us to state initial state of the object
or perform any operations before the object is ready for use
*/