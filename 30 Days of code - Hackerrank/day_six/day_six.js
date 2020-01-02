function processData(input) {
    //Enter your code here
    let inputString = input.split("\n")
    let even = ""
    let odd = ""
  
    for(let j = 1; j <= inputString[0]; j++){
        even = ""
        odd = ""
        let processString = inputString[j]

        for(let i = 0; i < processString.length; i++){
            if(i % 2 == 0){
                even += processString[i]
            }else if(i % 2 == 1){
                odd += processString[i]
            }
        }

        console.log(even + " " + odd)
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
