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

let processData = processBinary(13).split("")
console.log(processData)
let count = 0
let tempCount = 0
let temp = processData[0]

for(let i = 1; i < processData.length; i++){
    if(temp === processData[i]){
        count++
    }else{
        temp = processData[i]
    }
}