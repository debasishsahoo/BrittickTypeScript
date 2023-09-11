"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let sum = (x, y) => {
    return x + y;
};
sum(10, 20); //returns 30
let Print = () => console.log('Hello TypeScript');
Print(); //Output: Hello TypeScript
class Employee {
    empCode;
    empName;
    constructor(code, name) {
        this.empName = name;
        this.empCode = code;
    }
    display = () => console.log(this.empCode + ' ' + this.empName);
}
let emp = new Employee(1, 'Ram');
emp.display();
