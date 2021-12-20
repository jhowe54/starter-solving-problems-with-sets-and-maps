/**
 * Return an array of pairs of numbers that sum to N
 * @param {Array} A an array of numbers
 * @param {Number} N an integer value
 */
function sumPairs(A, N) {
    const numbers = new Map();
    const solution = new Map();

    for(let e of A) {
        numbers.set(e, e);
    }

    for(let e of A) {
        let diff = N - e;
        if(diff !== e) {
            let match = numbers.get(diff);
            if(match) {
                let key;
                e < diff ? key = e : key = diff;
                solution.set(key, [e, diff])
            }
        }
    }
    console.log(Array.from(solution.values()))
    return Array.from(solution.values())
}

module.exports = sumPairs;
