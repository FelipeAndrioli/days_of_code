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
        super(firstName, lastName, identification, numScores, testScores)
        this.numScores = numScores
        this.testScores = testScores
        
    }

    calculate(){
        console.log("Num Scores: " + this.numScores)
        console.log("Test Scores: " + this.testScores)
    }
}

function main(){
    let firstName = 'Nirso'
    let lastName = 'Gordo'
    let id = 666
    let numScores = 4
    let testScores = new Array(numScores)

    for(let i = 0; i < numScores; i++){
        testScores[i] = 8
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

main()