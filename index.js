console.log("Hello!")

// var - Variable storing - Scoping
// let - Variable storing - Scoping
// const - not changable
// Primitive - number, string, boolean, undefined, null, NaN
// Non Primitive - Array, Functions, Objects
// Wrapper objects - Number, String, Boolean, undefined, null, NaN

// let a = 10
// var b = 20
// myFunction()
// function myFunction()
// {
//     console.log("from function")
//     console.log(b)
//     console.log(a)
//     let c = 30
//     console.log(c)
//     {
//         console.log(c)
//         let d = 40
//     }
//     console.log(d)
// }
// console.log("------")
// console.log(b)
// console.log(a)
// console.log(c)

// class Student
// {
//     name
//     age
//     gender
//     marks
//     course
//     email
//     contact
//     //Attrbutes / Properties
//     constructor(name1, age, gender, marks, course, email, contact)
//     {
//         this.name = name1
//         this.age = age
//         this.gender = gender
//         this.marks = marks
//         this.course = course
//         this.email = email
//         this.contact = contact
//     }

//     print()
//     {
//         console.log("Name:", this.name)
//         console.log("age:", this.age)
//         console.log("gender:", this.gender)
//         console.log("course:", this.course)
//         console.log("email:", this.email)
//     }
// }

// let adtya = new Student("Adtya Gupta", 20, "Male", 60, "BCA", "adtyagupta@gmail.com", 9876543210)
//console.log(adtya)

// let tanishka = new Student("Tanishka Verma", 20, "Female", 60, "BCA", "tanishka@gmail.com", 9876543211)
//console.log(tanishka)
// adtya.name = "Adtya Gupta"
// adtya.age = 20
// adtya.gender = "Male"
// adtya.course = "BCA"
// adtya.email = "adtyagupta@gmail.com"

// adtya.print()
// tanishka.print()

// class Pen
// {
// 	height
// 	width
// 	inkHoleHeight
// 	colour
// 	brandingName

//     constructor(height,width,inkHoleHeight,colour,brandingName)
//     {
//         this.height = height
// 	    this.width = width
// 	    this.inkHoleHeight = inkHoleHeight
// 	    this.colour = colour
// 	    this.brandingName = brandingName
//     }

//     print()
//     {
//         console.log("Height: ", this.height)
//         console.log("Width: ", this.width)
//         console.log("InkHoleHeight: ", this.inkHoleHeight)
//         console.log("Colour: ", this.colour)
//         console.log("Brand: ", this.brandingName)
//     }
// }

// class BallPen extends Pen
// {
// 	ballDiameter
// 	inkThickness

//     constructor(ballDiameter, inkThickness)
//     {
//         this.ballDiameter = ballDiameter
//         this.inkThickness = inkThickness
//     }

//     print()
//     {
//         console.log("ballDiameter: ", this.ballDiameter)
//         console.log("inkThickness: ", this.inkThickness)
//     }

// }
// class FountainPen extends Pen
// {
// 	inkCapacity
// 	refillInk
// 	nipSize

//     constructor(inkCapacity, refillInk, nipSize)
//     {
//         super(10,2,6,"Red","Uni Ball")
//         this.inkCapacity = inkCapacity
//         this.refillInk = refillInk
//         this.nipSize = nipSize
//     }

//     print()
//     {
//         super.print()
//         console.log("inkCapacity: ", this.inkCapacity)
//         console.log("refillInk: ", this.refillInk)
//         console.log("nipSize: ", this.nipSize)
//     }
// }

// let fountainPen1 = new FountainPen(10, true, 0.5)
// fountainPen1.print()

// let adtya = {
//     name: "Adtya Gupta",
//     age: 20,
//     email: "adtya@gmail.com",
//     contactDetails:{
//         personal:9876543210,
//         work:8765432109,
//         home:7654321098
//     },

//     print: function()
//     {
//         console.log("Name:", this.name)
//         console.log("age:", this.age)
//         console.log("email:", this.email)
//     }
// }
// adtya.print()
// adtya.contact = 9876543210
// console.log("adtya.contact: ", adtya.contact)
// console.log(adtya)
// console.log(adtya["name"]) //
// console.log(adtya.contactDetails.personal)
// console.log(adtya["contactDetails"]["personal"])

// let contact = {
//     email_1: "abc@gmail.com",
//     email_2: "def@gmail.com",
//     email_3: "ghi@gmail.com",
//     "email_4": "jkl@gmail.com",
//     emails:["abc@gmail.com", "def@gmail.com", "ghi@gmail.com", "jkl@gmail.com"]
// }

// if("email_5" in contact)
//     console.log("Email 1 exists in contact object")

// for(property in contact)
// {
//     console.log(""+property+":", contact[property])
// }

// console.log(Object.keys(contact))


// for(let count=1; count<=4;count++)
// {
//     console.log(contcat["email_"+count])
// }
// console.log(contcat.emails[2])
// console.log(contcat)

// if(contcat.emails)
//     console.log("we have emails array")

// if(contcat && contcat.emails)
//     console.log("")

// delete contcat.emails
// console.log(contcat)

// if(contcat.emails)
//     console.log("we have emails array")

// if(contcat && contcat.emails)
//     console.log("")

//Truthy = 1 true, " ", [1], {1:1}
//Falsy = undefined, null, false, 0, "", {}, [], NaN

// "" 
// " "

const student ={
    name: "Adtya Gupta"
}

// console.log(student.name)
// student.name = "Tanishka Verma"
// console.log(student.name)

// student.age = 20
// console.log(student.age)
// student = {
//     age: 20
// }

// const x = 10
// x = 20

let newStudent = student //
console.log(newStudent)
console.log(student)
student.name = "Tanishka"
console.log(newStudent)
console.log(student)
newStudent.name = "Adtya"
console.log(newStudent)
console.log(student)
console.log("============")
let newStudent1 = {}
Object.assign(newStudent1, student)
console.log(newStudent1)
console.log(student)
student.name = "Tanishka"
console.log(newStudent1)
console.log(student)
newStudent1.name = "Adtya1"
console.log(newStudent1)
console.log(student)

