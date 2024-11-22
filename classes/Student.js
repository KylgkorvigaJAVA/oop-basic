const Person = require('./Person')

class Student extends Person {
    constructor(name) {
        super(name)
        this.id = null
        this.grades = []
    }

    setId(id) {
        if(this.id === null) {
            this.id = id
        }
    }

    getId() {
        return this.id
    }

    addGrade(course, grade) {
        const newGrade = {
            course: course,
            grade: grade
        }
        this.grades.push(grade)
    }

    getGrades() {
        return this.grades
    }

    getAverageGrade() {
        if(this.grades.length === 0) {
            return -1
        } else {
            /* TODO - add math for average grade */
            return 0
        }
    }

    description() {
        return `Student ${this.name}`
    }
}

module.exports = Student