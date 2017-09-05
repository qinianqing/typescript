class Student3 {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
//类型注解为一个类
function greeter3(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

var user = new Student3("Jane", "M.", "User");

document.body.innerHTML = greeter(user);