function main() {

    let data = [1000000000,
                1000000001,
                1000000002,
                1000000003,
                1000000004,
                1000000005,
                1000000006,
                1000000007,
                1000000008,
                1000000009]

    let isPrime = function(n){
        for(let i = 2, s = Math.sqrt(n); i <= s; i++) {
            if(n % i === 0) {
                return false
            }
        }

        return n > 1
    }

    for(let i = 0; i < data.length; i++) {
        if(isPrime(data[i])) {
            console.log("Prime")
        }else {
            console.log("Not prime")
        }
    }


}

main()