class Course {
    constructor(name){
        this.name
        this.grades = []
    }

    getGrades(){
        return this.student
    }

    addGrade(student, grade) {
        const newGrade = {
            student: student,
            grade: grade
        }
        this.grades.push(newGrade)
    }
}

module.exports = Course