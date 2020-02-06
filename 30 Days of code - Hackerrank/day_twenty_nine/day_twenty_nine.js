function max_possible_value(n, k) {

    return (((k - 1) | k) > n ? k - 2 : k - 1)

}

function main() {
    const t = 3
    const dataArray = ['5 2', '8 5', '2 2']

    for (let tItr = 0; tItr < t; tItr++) {
        const nk = dataArray[tItr].split(' ');

        const n = parseInt(nk[0], 10);

        const k = parseInt(nk[1], 10);

        console.log(max_possible_value(n, k))
    }
}

main()