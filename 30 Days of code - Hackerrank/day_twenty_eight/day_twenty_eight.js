function main() {
    
    const dataArray = [ 'riya riya@gmail.com',
                        'julia julia@julia.me',
                        'julia sjulia@gmail.com',
                        'julia julia@gmail.com',
                        'samantha samantha@gmail.com',
                        'tanya tanya@gmail.com']

    const N = dataArray.length()


    for (let NItr = 0; NItr < N; NItr++) {
        const firstNameEmailID = readLine().split(' ');

        const firstName = firstNameEmailID[0];

        const emailID = firstNameEmailID[1];
    }
}

function verificaEmail(email) {

    //console.log(email)
    const finalEmail = '@gmail.com'
    let i = 0
    let bool = false

    while(email[i] != '@') {
        i++
    }

    for(let j = i; j < email.length; j++) {
        if(email[j] == finalEmail[j - i]) {
            bool = true
        }else {
            bool = false
        }
    }

    return bool
}

function dataTest() {
    
    const dataArray = [ 'riya riya@gmail.com',
                        'julia julia@julia.me',
                        'julia sjulia@gmail.com',
                        'julia julia@gmail.com',
                        'samantha samantha@gmail.com',
                        'tanya tanya@gmail.com']

    const N = dataArray.length

    let result = []
    //const firstNameEmailID = dataArray.split(' ')

    for(let i = 0; i < N; i ++) {
       //console.log(dataArray[i].split(' '))
        const firstNameEmailID = dataArray[i].split(' ')
        const firstName = firstNameEmailID[0]
        const email = firstNameEmailID[1]

        if(verificaEmail(email)) {
            result.push(firstName)
        }
    }
    result.sort()
    
    for(let i = 0; i < result.length; i++) {
        console.log(result[i])
    }
}

dataTest()