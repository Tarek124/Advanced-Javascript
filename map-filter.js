const number = [2, 3, 1, 5, 6, 7, 8]
// const output = []
// for (let i = 0; i < number.length; i++) {
//     const element = number[i]
//     const result = element * element;
//     output.push(result);
// }


// const output = number.map(function square(element) {
//     return element * element
// })

// const output = number.map(x => x * x);

// console.log(output)

const output = number.filter(x => x < 5);

const bigger = number.find(x => x > 5);

console.log(bigger)