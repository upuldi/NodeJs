//simple definition
var obj = new Object()
console.log(obj)

var anotherObj = {}
console.log(anotherObj)

var user = { firstName: "Upul", lastName: "Doluweera"}
console.log(user)
console.log(user.lastName)
console.log(user.somethingNotDefined)

//This is similar to JSON, only difference in JSON is to quate property name
//as well as values

//We can delete properties from objects using delete keyword
delete user.firstName
console.log(user)

//Anotherway to add properties
user["address"] = "Australia"
console.log(user)

//To get properties or keys of any object
console.log(Object.keys(user))
console.log(Object.keys(user).length)
