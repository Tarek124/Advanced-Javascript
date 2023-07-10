const student = [
    { id: 21, name: "Omar Sunny" },
    { id: 41, name: "Maannaaa" },
    { id: 31, name: "Deepjol" },
    { id: 65, name: "Moyouri" }
];



// const names = [];


// for (let i = 0; i < student.length; i++) {
//     const element = student[i];
//     names.push(element.name)

// }


const names = student.map(s => s.name)
console.log(names)

const ids = student.map(x => x.id);
console.log(ids)

const biggerId = student.filter(s => s.id > 40);
console.log(biggerId)

const biggerOne = student.find(s => s.id > 40);
console.log(biggerOne)
