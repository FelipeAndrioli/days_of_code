function Calculator() {

    this.power = function (n, p) {
        
        try{
            if(n >= 0 && p >= 0){
                return Math.pow(n, p)
            }
        } catch {
            
        }
        
    }
}

function main(){
    var myCalculator=new Calculator();
    var T=parseInt(readLine());
    while(T-->0){
        var num = (readLine().split(" "));
        try{
            var n=5
            var p=7
            var ans=myCalculator.power(n,p);
            console.log(ans);
        }
        catch(e){
            console.log(e);
        }

    }
}

main()