function processBinary(n){

    if(n >= 1){
        if(n % 2){
            return processBinary((n - 1) / 2) + 1;
        }else{
            return processBinary(n / 2) + 0;
        }
    }else{
        return '';
    }
}

function comparisson(n){
    let processData = n.split("")
    //console.log(processData)
    let biggerCount = 0
    let lowerCount = 0

    for(let i = 0; i < processData.length; i++){
        if(processData[i] == 1){
            lowerCount++
            if(lowerCount > biggerCount){
                biggerCount = lowerCount
            }
        }else{
            lowerCount = 0
        }
    }

    return biggerCount
}

console.log(comparisson(processBinary(111)))