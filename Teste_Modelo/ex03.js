class Company {
    constructor() {
        this._employees = []
        this._departments = ['Informatics', 'Financial', 'Marketing']
    }

    /*O método deve lançar erros para quem o invocou sempre que o departamento não exista 
    ou o nome do funcionário já exista na empresa.*/
    hireEmployee(name, department, salary) {
        if (this._employees.some(employee => employee.name === name)) {
            throw Error("O nome já existe")
        } else if (!this._departments.includes(department)) {
            throw Error("O departamento não existe")
        } else {
            this._departments.push({ name, department, salary })
        }
    }

    //Método que devolva um array com toda a informação de todos os funcionários da empresa.
    getEmployees() {
        return this._employees
    }


    /* Método que aumente em value o salário hora dos funcionários de um dado departamento.
    O método deve lançar erro caso o departamento não exista. */
    increaseSalary(department, value) {
        if (this._departments.includes(department)) {
            this._employees = this._employees.map(employee =>
                    employee.department === department ?
                    ({ name: employee.name, department: employee.department, salary: employee.salary + value }) : employee)
                /* Resumo
                    O método map() invoca a função callback passada por argumento para cada elemento do Array 
                    e devolve um novo Array como resultado. */
        } else {
            throw Error("O departamento não existe")
        }
    }



    /* Método que deve devolver o valor gasto pela empresa para pagar os salários de todos os trabalhadores. 
    Tenha em conta que um dia de trabalho são 8 horas e que os empregados trabalham 5 dias por semana. */
    getWeeklyExpenseEmployees() {
        return this._employees.reduce(
            (accumulator, employee) => accumulator + employee.salary * 40, 0
        );
    }
}


//Fora da class, invoque o método 4 vezes com os dados
const myCompany = new Company()
try {
    myCompany.hireEmployee('Manuel Rocha', 'Informática', 12)
    myCompany.hireEmployee('Maria Bastos', 'Financeiro', 20)
    myCompany.hireEmployee('Pedro Silva', 'Marketing,', 10)
    myCompany.hireEmployee('Silvia Rocha', 'Informática', 12)

} catch (error) {
    console.log(error);

}