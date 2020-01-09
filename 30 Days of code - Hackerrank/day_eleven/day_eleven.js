function processData(input){
    
    //gambiarra, estava meio tarde :P 
    let biggerSum = -9999999999
    let lowerSum = 0

    for(let i = 0; i < (input.length) - 2; i++){
        for(let j = 0; j < (input[i].length) - 1; j++){
            
            lowerSum =  input[i][j] + 
                        input[i][j + 1] + 
                        input[i][j + 2] + 
                        input[i + 1][j + 1] + 
                        input[i + 2][j] + 
                        input[i + 2][j + 1] + 
                        input[i + 2][j + 2]
            
            if(lowerSum > biggerSum){
                biggerSum = lowerSum
            }
            
            console.log("Soma menor: " + lowerSum)
            console.log("Soma maior: " + biggerSum)

            lowerSum = 0
        }
    }

    console.log(biggerSum)
}

processData([
    [-1, -1, 0, -9, -2, -2],
    [-2, -1, -6, -8, -2, -5],
    [-1, -1, -1, -2, -3, -4],
    [-1, -9, -2, -4, -4, -5],
    [-7, -3, -3, -2, -9, -9],
    [-1, -3, -1, -2, -4, -5]
])
