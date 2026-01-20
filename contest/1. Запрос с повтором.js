function Employee(name, position, salary) {
    this.name = name
    this.position = position
    this.salary = salary
}

Employee.prototype.getInfo = function getInfo() {
    return `"Имя: ${this.name}, Должность: ${this.position}, Зарплата: ${this.salary}"`
}

Employee.prototype.work = function work() {
    return `"${this.name} работает..."`
}

let empl1 = new Employee('Jack', 'cleaner', 100)

// empl1.getInfo()
// console.log('empl1.getInfo()::: ', empl1.getInfo());



function Developer(name, position, salary, programmingLanguage) {
    Employee.call(this, name, position, salary)
    this.programmingLanguage = programmingLanguage
}

Developer.prototype = Object.create(Employee.prototype)

Developer.prototype.constructor = Developer

Developer.prototype.work = function work() {
    return `${this.name} пишет код на ${this.programmingLanguage}`
}

let dev1 = new Developer('Max', 'Dev', 200, 'Java')

console.log('dev1.work()::: ', dev1.work());
console.log('empl1.work()::: ', empl1.work());

function Manager(name, position, salary, teamSize) {
    Employee.call(this, name, position, salary)
    this.teamSize = teamSize
}
Manager.prototype = Object.create(Employee.prototype)

Manager.prototype.constructor = Manager

// Manager.prototype


// conductMeeting(): "[name] проводит совещание"
Manager.prototype.conductMeeting = function conductMeeting(params) {

    return `${this.name} проводит совещание`
}

Manager.prototype.work = function work() {
    return `${this.name} управляет командой из ${this.teamSize} человек`
}

let man1 = new Manager('Sem', 'manger', 98, 30)
man1.work()
console.log('man1.work()::: ', man1.work());





function TeamLead(name, position, salary, teamSize) {
    // Employee.call(this, name, position, salary)
    Manager.call(this, name, position, salary, teamSize)
    this.teamSize = teamSize
}

Object.assign(TeamLead, Employee)
Object.assign(TeamLead, Manager)
TeamLead.prototype = Object.create(Manager.prototype)

TeamLead.prototype.constructor = TeamLead



TeamLead.prototype.work = function work() {
    // Employee.call(this, work())
    // Manager.call(this, work())

    let res = ''
    res += Employee.prototype.work.call(this)
    res += Manager.prototype.work.call(this)
    res += `и управляет командой размером ${this.teamSize} человек`


    return res
}

let tLed1 = new TeamLead('Tom', 'TeemLed', 300, 10)
// tLed1.work()
console.log('tLed1.work()::: ', tLed1.work());