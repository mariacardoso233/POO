import GradeModel from './gradeModel.js'

export default class GradeController {

    constructor() {
        this.gradeModel = new GradeModel()
    }

    addGrade(ano, disciplina, nota) {
        if (!this.gradeModel.getAll().some(grade => grade.disciplina === disciplina)) {
            this.gradeModel.create(ano, disciplina, nota)
        } else {
            throw Error('Disciplina já tem uma nota associada!')
        }
    }

    getGrades() {
        return this.gradeModel.getAll()
    }

    removeGrade(disciplina) {
        this.gradeModel.remove(disciplina)
    }

    //modal com a média global.
    getAverageGrade() {
        let sum = 0

        const grades = this.getModel.getAll() //Buscar todas as notas para a variavél criada
        for (const grade of grades) {
            sum += +grade.nota //sumatório de todas as notas
        }
        return sum / grades.length //calculo da média global
    }

    //modal com a média por ano
    getAverageGradeYear() {
        let sum = 0,
            countGradeYear = 0

        const grades = this.gradeModel.getAll()
        for (const grade of grades) {
            if (grade.ano == ano) {
                sum += +grade.nota
                countGradeYear++
            }
        }
        return sum / countGradeYear
    }

}