function main() {
    
    let a = [3, 2, 1]
    let totalSwaps = 0

    for(let i = a.length; i > 0; i++){
        for(let j = 0; j < (a.length - 1); j++){
            if(a[j] > a[j + 1]){
                let temp = a[j]
                a[j] = a[j + 1]
                a[j + 1] = temp
                totalSwaps++
            }
        }
    }

    console.log("Array is sorted in "+totalSwaps+" swaps.")
    console.log("First Element: "+a[0])
    console.log("Last Element: "+a[a.length - 1])
   
}

main()
