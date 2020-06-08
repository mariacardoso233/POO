export default class GradeModel {

    constructor() {
        this.grades = localStorage.grades ? JSON.parse(localStorage.grades) : []
    }

    getAll() {
        return this.grades;
    }

    create(ano, disciplina, nota) {
        this.grades.push({ ano, disciplina, nota })
        this._persist()
    }

    remove(disciplina) {
        this.grades = this.grades.filter(grade => grade.disciplina != disciplina)
        this._persist()
    }

    _persist() {
        localStorage.grades = JSON.stringify(this.grades)
    }
}