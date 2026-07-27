// let arr = [1,2,3];
// arr.sayHello= ()=>{
//     console.log("Hello everyone");
// };

// function PersonMaker(name,age){
//     const person={
//         name:name,
//         age:age,
//         talk(){
//             console.log(`Hi, my name is ${name}`);
//         }
//     };

//     return person;
// }

//Constructors - dosen't return anything & start with capital 
// function Person(name,age){
//     this.name = name;
//     this.age = age;
// }

// let p1 = new Person("kartik",21);
// let p2 = new Person("Aditya", 22); 


class Person {
    constructor(name,age){
        console.log("This is Person constructor")
        this.name = name;
        this.age = age;
    }

    talk(){
        console.log(`Hi! This is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks){
        console.log("This is student constructor");
        super(name,age)
        this.marks = marks;
    }
}

class Teacher extends Person{
    constructor(name, age, subject){
        super(name, age)
        this.subject = subject;
    }
}

