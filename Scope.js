let bonus = 20;

function sum(first, second) {
    let result = first + second + bonus;
    if (result > 6) {
        console.log("Happy")
    }
    return result;
}
const output = sum(3, 5);

console.log(output)