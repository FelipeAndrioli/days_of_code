class Person {
    constructor(firstName, lastName, identification){
        this.firstName = firstName
        this.lastName = lastName
        this.idNumber = identification
    }

    printPerson(){
        console.log(
            "Name: " + this.lastName + ", " + this.firstName
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    constructor(firstName, lastName, identification, numScores, testScores){
        super(firstName, lastName, identification)
        this.testScores = testScores
        
    }

    calculate() {

        let avg = 0
        let conversion = ''

        for (let i = 0; i < this.testScores.length; i++) {
            avg += this.testScores[i]
        }

        avg /= this.testScores.length

        if (90 <= avg && avg <= 100) {
            conversion = 'O'
        } else if (80 <= avg && avg < 90) {
            conversion = 'E'
        } else if (70 <= avg && avg < 80) {
            conversion = 'A'
        } else if (55 <= avg && avg < 70) {
            conversion = 'P'
        } else if (40 <= avg && avg < 55) {
            conversion = 'D'
        } else {
            conversion = 'T'
        }
        return conversion
    }
}

function main(){
    let firstName = 'Heraldo'
    let lastName = 'Mememlli'
    let id = 8135627
    let numScores = 4
    let testScores = [31, 32, 34, 35]

    let s = new Student(firstName, lastName, id, numScores, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

main()