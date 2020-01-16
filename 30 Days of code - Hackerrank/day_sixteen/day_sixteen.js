function main() {
    const S = 3

    try {
        let N = eval(S)
        console.log(N)
    }catch (e) {
        console.log('Bad String')
    }
}

main()