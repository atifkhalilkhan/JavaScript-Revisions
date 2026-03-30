// Array & Object in JavaScript 

const Product  = {
    name: "laptop",
    price : "50000",
    brand : "HP",
    city : "Karachi"
}


const {name, price, ...rest} = Product

console.log(name);
console.log(price);
console.log(rest);

const numbers = [1, 2, 3, 4, 5]


// 

const [first, second, ...restofarray] = numbers

console.log(first);
console.log(second);
console.log(restofarray);


// 

const boys = ["Ali", "Ahmed", "Hassan", "Hussain"]
const girls = ["Ayesha", "Sana", "Zainab", "Hina"]

const allstudent = [...boys, ...girls] 

console.log(allstudent);    

const [monitor, ...students] = allstudent

console.log(monitor);
console.log(students);


// 

const users = [
    { name: "Ali", age: 25},
    { name: "Ahmed", age: 30},
    { name: "Hassan", age: 35},
    { name: "Hussain", age: 40}
]

let allusers =users.map(user => {return user.name})
console.log(allusers);


// 
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 30000 },
  { name: "Tablet", price: 20000 }
];

const PrductTotal = products.reduce((total, products) => total + products.price,0)

console.log(PrductTotal);
