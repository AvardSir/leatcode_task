function Employee(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
    // this.getInfo = function getInfo() {
    //     return `Имя: ${this.name}, Должность: ${this.position}, Зарплата:  ${this.salary}`
    // }
}
Employee.prototype.getInfo = function getInfo() {
    return `Имя: ${this.name}, Должность: ${this.position}, Зарплата:  ${this.salary}`
}
let empl = new Employee('Jack', 'clener', 60)

// empl.getInfo()
console.log('empl.getInfo()::: ', empl.getInfo());