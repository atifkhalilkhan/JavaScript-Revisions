// Functions & Callbacks


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const evenNumbers = numbers.filter(x => x % 2 === 0);

// console.log(evenNumbers);


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function isEven(n){
    return n % 2 === 0;
}

const evenNumber = numbers.filter(isEven)

console.log(evenNumber);


const students = [
  { name: "Ali", marks: 45 },
  { name: "Ahmed", marks: 78 },
  { name: "Sara", marks: 90 },
  { name: "Hina", marks: 33 }
];

let passedStudents =(student)=>{
     return student.marks >= 50;
}

const passed = students.filter(passedStudents);
console.log(passed);
