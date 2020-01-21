function Calculator() {

    this.power = function (n, p) {

        if(n < 0 || p < 0){
            throw("n and p should be non-negative")
        }else{
            return Math.pow(n, p)
        }
    }
}

function main(){
    var myCalculator=new Calculator();

        try{
            var n = 3
            var p = 5
            var ans=myCalculator.power(n, p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }
}

main()

/**
 * 
4
3 5
2 4
-1 -2
-1 3
 */