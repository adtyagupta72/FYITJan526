let items = ["apple","banana","mango"]
items.push("pineapple")
console.log(items)

items.unshift("litchi")
console.log(items)

items.pop()
console.log(items)

items.shift()
console.log(items)

console.log(items.indexOf("banana"))

console.log(items.includes("banana"))

console.log(items.slice(1,3))

console.log(items.splice(1,1))

items.push("pineapple")

console.log(items.join("-"))

let numbers = [2,3,4,5,6,1]
console.log(numbers.map(num=>num*2))

console.log(numbers.filter(num=>num>4))

console.log(numbers.reduce((total,num)=>total+num,0))

console.log(numbers.sort())

console.log(numbers.reverse())
