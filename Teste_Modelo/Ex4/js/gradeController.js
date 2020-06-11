import GradeModel from './gradeModel.js'

export default class GradeController {

    constructor() {
        this.gradeModel = new GradeModel()
    }

    addGrade(year, course, score) {
        //Se não houver alguma nota na disciplina ele cria a disciplina
        if (!this.gradeModel.getAll().some(grade => grade.course === course)) {
            this.gradeModel.create(year, course, score) //criação da nota
        } else {
            throw Error('Disciplina já tem uma nota associada!')
        }
    }

    getGrades() {
        return this.gradeModel.getAll()
    }

    removeGrade(course) {
        this.gradeModel.remove(course)
    }

    //modal com a média global.
    getAverageGrades() {
        let sum = 0
        const grades = this.gradeModel.getAll() //Buscar todas as notas para a variavél criada
        for (const grade of grades) {
            sum += +grade.score //sumatório de todas as notas
        }
        return sum / grades.length //calculo da média global
    }

    //modal com a média por ano
    getAverageGradeYear(year) {
        let sum = 0,
            countGradesYear = 0
        const grades = this.gradeModel.getAll()
        for (const grade of grades) {
            if (grade.year == year) {
                sum += +grade.score
                countGradesYear++
            }
        }
        return sum / countGradesYear
    }
}