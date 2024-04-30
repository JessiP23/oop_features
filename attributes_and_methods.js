//ENCAPSULATION
class Teacher{
    name;
    age;
    #salary;//this pound sign allows us to hide data from other people. this is known as the private attribute. This means i can not modify, change, delete or anything inside of the class definition
    constructor(name, age, salary){
        this.name = name
        this.age = age
        this.#salary = salary
        console.log(this.#getSalary());//Now is being thrown out in line 25
    }
    /*getSalary(){
        console.log(this.#salary);*/
    //example 2
    #getSalary(){//getter. By adding # at beginning, makes getSalary and convert it into a private method. This is only accessed inside the class. Move to line 10 to make it accessible from outside of this class
        return this.#salary;
    }
    setSalary(newSalary){//setter
        if(newSalary <= 0){
            throw Error("Invalid salary, must be above 0")
        }
        this.salary = newSalary
    }
}
const teacher = new Teacher("Jessi", 21, 50000)
//EXPLANATION
/*When working just with #salary and constructor, we can not access salary information and returns undefined.
However, once creating getSalary function and printing #salary, then we call the function and runs this private property.
ENCAPSULATION
Is a way to restrict the direct access to some components of an object, so users cannot access state values for all of the variables of a particular object
*/
//EXAMPLE FROM QUIZ
class Personperson{
    name;
    #age;
    constructor(name,age){
        this.name = name 
        this.#age = age
    }
}
const keiry = new Person("Keiry", 20);
console.log(keiry.age)
//OUTPUT
//UNDEFINED





//STATIC ATTRIBUTES AND METHODS
//anything static is associated with class and no instance
class Personn{
    name;
    static numberOfPeople = 0;
    constructor(name){
        this.name = name;
        Person.numberOfPeople++;//static attribute
    }
    static getNumberOfPeople(){ //static method
        return Personn.numberOfPeople;
    }
    static removePerson(){
        this.numberOfPeople--;
    }
}
const p = new Personn("tim");
const p2 = new Personn("joe");
console.log(Personn.numberOfPeople); 
//output 2
Person.removePerson();
console.log(Personn.getNumberOfPeople());
//QUIZ
/*What is a static attribute in JavaScript?
It is an attribute associated with the class itself
Reason: Static attribute is an attribute associated with the class itself, rather than with instances of the class. It is shared among all instances of the class.
Static attribute are accessed directly form the class itself, rather than from instances of the class
EXAMPLE:
class myClass{
    static myAttribute = 10;

    console.log(myClass.myAttribute);
}

Why would we use static methods in JavaScript?
a) To define utility functions that are not tied to any specific instance of a class
b)To perform common operations or calculations that are not related to specific instances
c)To create helper methods that assist in performing tasks within a class
 */