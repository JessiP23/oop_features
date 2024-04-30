const obj = {
    name: "time",
    sayHi: function () { //method is a function inside of an object
        console.log("hi");
    },
};

console.log(obj.toString());
//OUTPUT  [object Object]
//access to prototype
console.log(obj.__prot__);
console.log(Object.getPrototypeOf(obj));

//Use this object as prototype of a different object
const personPrototype = {
    greet(){
        console.log("hello")
    }
}
const tim = Object.create(personPrototype);//this creates a new empty object. Also means that personPrototype is gonna be the prototype of this new object
tim.greet();


const personPrototypep = {
    greet(){
        console.log(this.name);
    },
};
const jessi = Object.create(personPrototypep);
jessi.name = "Jessi";
const joandy = Object.create(personPrototypep);
joandy.name = "Joandy";

jessi.greet(); //Jessi  
joandy.greet();// Joandy

console.log(Object.getPrototypeOf(tim));
//prototype chain
const proto = Object.getPrototypeOf(tim);
console.log(Object.getPrototypeOf(proto));//this get the prototype of the prototype proto of the object tim

