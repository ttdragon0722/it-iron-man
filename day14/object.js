// class Person {
//     name = "rex";
//     age = 17;
//     weight = 60;
//     height = 170;

//     constructor(name, age, weight, height) {
//         if (name) this.name = name;
//         if (age) this.age = age;
//         if (weight) this.weight = weight;
//         if (height) this.height = height;

//         // !!!!!
//         Person.count();
//     }

//     hello() {
//         console.log("hi, my name is " + this.name);
//     }

//     static people = 0;
//     static count() {
//         this.people++;
//     }
// }

// class Student extends Person {
    
//     studentId;
//     constructor(studentId, name, age, weight, height) {
//         super(name, age, weight, height);
//         this.studentId = studentId;
//     }
//     live() {
//         this.hello();
//         console.log("i love study\n");
//     }
// }
// class OfficeWorker extends Person {
//     workId;
//     constructor(workId, name, age, weight, height) {
//         // person的初始化        
//         super(name, age, weight, height);
//         this.workId = workId;
//     }
//     live() {
//         // person的hello()函式
//         this.hello();
//         console.log("i love work\n");
//     }
// }

// rex = new Student(87);
// lynn = new OfficeWorker(87, "lynn", 17, 60, 163);
// rex.live();
// lynn.live();
// console.log(Person.people);
class Person {
    name = "rex";
    age = 17;
    weight = 60;
    height = 170;

    constructor (name,age,weight,height) {
        if (name) this.name = name;
        if (age) this.age = age;
        if (weight) this.weight = weight;
        if (height) this.height = height;
    }

    hello () {
        console.log("hi, my name is "+ this.name);
    }
}

rex = new Person();
console.log(rex);

viscose = new Person("viscose",19,60,180);
console.log(viscose);

rex.hello();
viscose.hello();

