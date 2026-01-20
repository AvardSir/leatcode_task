let Employee = {
    name: '',
    salary: 0,

    work() {

    }
}
let Developer = {}
Object.setPrototypeOf(Developer, Employee)

Developer.work = () => {
    console.log('programing::: ');
}
Developer.name = 'John'
Developer.salary = 100

let Manager = {}
Object.setPrototypeOf(Manager, Employee)

Manager.work = () => {
    console.log('managin::: ');
}
Manager.name = 'kirk'
Manager.salary = 50


let TeamLead = {}
Object.setPrototypeOf(TeamLead, Employee)

TeamLead.work = () => {
    
    console.log('Teeemledeng::: ');
}
TeamLead.name = 'Alex'
TeamLead.salary = 150


console.log('TeamLead::: ', TeamLead);
console.log('Manager::: ', Manager);

console.log('Developer::: ', Developer);

TeamLead.work()
Manager.work()
Developer.work()