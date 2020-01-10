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

        let sum = 0
        let avg = 0
        let conversion

        for(let i = 0; i < this.numScores; i++){
            sum += this.testScores[i]
        }

        avg = sum / this.numScores

        if(90 <= avg  && avg <= 100){
            //conversion = 'O'
            return 'O'
        }else if(80 <= avg  && avg < 90){
            //conversion = 'E'
            return 'E'
        }else if(70 <= avg  && avg < 80){
            //conversion = 'A'
            return 'A'
        }else if(55 <= avg && avg< 70){
            //conversion = 'P'
            return 'P'
        }else if(40 <= avg && avg < 55){
            //conversion = 'D'
            return 'D'
        }else if(avg < 40){
            //conversion = 'T'
            return 'T'
        }
    }
}

function main(){
    let firstName = 'Heraldo'
    let lastName = 'Mememlli'
    let id = 8135627
    let numScores = 2
    let testScores = [100, 80]

    let s = new Student(firstName, lastName, id, numScores, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}

main()