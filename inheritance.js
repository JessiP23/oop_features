class Personm{
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
class Studentm extends Personm{//inherit all functionality from Person class

}
const s1 = new Studentm("Tim",10);
console.log(s1);
//OUTPUT       Student {name: "Tim", age: 10}



class Person{//Parent class
    name;
    age;
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return this.name + " " + this.age
    }
}

class Teacher extends Person{
    salary;
    constructor(name,age,salary){
        super(name, age);
        this.salary = salary;
    }
    greet(){
        return this.name + " " + this.age;
    }
}

class Student extends Person{//child class
    group;
    constructor(name,age,group){
        super(name,age); //super calls the constructor of my parent class and pass the name and the age
        this.group = group;
    }
}
const s2 = new Student("Tim",10,"A");
const t1 = new Student("Sally",30, 40000);
console.log(s2.greet());
console.log(t1.greet());


//EXTENDS
/*By using extends will reuse all logic from whatever class being inheriting from */
//SUPER
/*Once in child class, by using super allows us to get access into the parent function into the parent class */