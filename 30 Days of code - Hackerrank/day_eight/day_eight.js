function processData(input) {
    let processString = input.split("\n")
    let dict = {}
    let calls = []
    let qtd = parseInt(processString[0])

    var addPair = function(myKey, myValue){
        dict[myKey] = myValue;
    }

    var giveValue = function (myKey){
        return dict[myKey]
    }
    
    for(let i = 1; i <= qtd; i++){
        addPair((processString[i].split(" ")[0]), (processString[i].split(" ")[1]))
        //calls.push(processString[(i + qtd)])
    }

    for(let i = qtd + 1; i < processString.length; i++){
        calls.push(processString[i])
    }

    for(let i = 0; i < calls.length; i++){
        if(giveValue(calls[i]) !== undefined){
            console.log(calls[i] + "=" + giveValue(calls[i]))
        }else{
            console.log('Not found')
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
