const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const part = nums.slice(2, 5)
// const removed = nums.splice(4, 2, 50, 60)

// console.log(removed)
// console.log(nums)
console.log(part)


// const together = nums.join(', ')
// console.log(together);



const people = [
    {
        name: "Tarek",
        age: 17,
        collage: "Feni computer Inistitute"
    },
    {
        name: "Tanim",
        age: 17,
        collage: "Feni Mohipal collage"
    },
    {
        name: "Emon",
        age: 17,
        collage: "Feni Govt. collage"
    },
    {
        name: "Nahid",
        age: 17,
        collage: "Noakhali collage"
    },
    {
        name: "Santo",
        age: 17,
        collage: "Feni city collage"
    }
]
const removeStu = people.splice(2, 2, {
    name: "Faruk",
    collage: "Malasiya collage"
    , age: 26
})

const joinPeople = people.name;
const parts = people.slice(1, 3);
const joined = people.join(", ")
// console.log(joined)
// console.log(joinPeople)
console.log(parts)