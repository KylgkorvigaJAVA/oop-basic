class Course {
    constructor(name){
        this.name = name
        this.grades = []  
    }

    getGrades(){
        return this.grades
    }

    addGrade(student, grade){
        const newGrade = {
            student: student,
            grade: grade
        }
        this.grades.push(newGrade) 
    }

    getAverageGrade(){
        if(this.grades.length === 0){
            return -1
        } else {
            const total = this.grades.reduce((sum, grade) => sum + grade.grade, 0)
            return total / this.grades.length
        }
    }

    description(){
        return `Course ${this.name}`
    }  
}

module.exports = Course