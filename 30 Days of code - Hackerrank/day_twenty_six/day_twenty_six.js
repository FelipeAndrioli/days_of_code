const calculate = (actual, expected) => {
    if(actual.year > expected.year) {
        return 10000
    }

    if(actual.year === expected.year && actual.month > expected.month) {
        return (actual.month - expected.month) * 500
    }

    if(actual.month === expected.month && actual.day > expected.day) {
        return (actual.day - expected.day) * 15
    }

    return 0
}

function processData(input) {
    //Enter your code here
    const lines = input.split("\n");
  
    const [actual, expected] = lines.map(line => {
    
        const [day, month, year] = line.split(" ").map(Number);
    
        return {day, month, year};
    });

    console.log(calculate(actual, expected))
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
