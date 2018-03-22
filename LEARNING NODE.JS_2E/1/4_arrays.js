// array definitions
var array  = new Array()
var array2 = [1,2,3,4]

//arrays are objects
console.log( typeof array2)

// length
console.log(array2.length)

//isArray()
console.log(Array.isArray(array2))

//array looping
for(var i =0 ; i < array2.length ; i++) {
  console.log(array2[i])
}

//To Add new elements to the array you can use the index
array2[array2.length] = 50
console.log(array2)
array2[8] = 501

//push() can be used to push values to array
array2.push(1000)
console.log(array2)

//To remove elements from an array
//delete will make the values undefined
delete array2[2]
console.log(array2)

//splice(starting index, no of elements), splice changes no of elements
//splice will completely remove the elements including index positions
array2.splice(2,1)
console.log(array2)
array2.splice(4,3)
console.log(array2)

//pop() will return the last element of the arry.
array2.pop()
console.log(array2)

//shift() will remove the element from the begining of the array
array2.shift()
console.log(array2)

//unshift(_) will add element to the begining of the array
array2.unshift(400)
console.log(array2)

//Split() will return an array
var splitArray = "1,2,3,4,5".split(",")
console.log(splitArray)

//joing(_) wil join an array
console.log(splitArray.join(":"));

//sort() can be used to sort arrays
console.log(array2.sort())

//you can pass a function to sort function
array2.sort(function(a,b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
},array2)

console.log(array2)

//you can pass a function to forEach() on a array
array2.forEach(function (x) {
  console.log(x*x)
})
