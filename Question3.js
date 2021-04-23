const Employee = function (firstName, lastName, birthDate) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.getFullName = function () {
        return this.firstName + " " + this.lastName;
    }
    this.getAge = function () {
        return new Date().getUTCFullYear() - new Date(this.birthDate).getUTCFullYear();
    }
}

let john = new Employee("John", "Smith", new Date(1990,7));
let smith = new Employee("Smith", "John", new Date(1970,4));
let tina = new Employee("Ruxan", "Xing", new Date(2001,3));
let employeeArray = [john, smith, tina];

// Age more than 30
let empGreaterThan30 = employeeArray.filter(e => e.getAge() > 30);
empGreaterThan30.forEach(emp => console.log(emp.getFullName()));


// Employee with full name and born after 2000
let empBornAfter2000 = employeeArray.filter(emp => emp.getFullName() && new Date(emp.birthDate).getUTCFullYear() > 2000);
empBornAfter2000.forEach(emp => console.log(emp.getFullName()));