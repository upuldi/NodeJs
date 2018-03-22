// null and undefines are special values
// typeof will give the type of the variable
var stringVal = "SomeSting"
console.debug( typeof stringVal);

//All the numbers are floating point  2^53 values
// Anynumber greater than that value becomes an approximation
// Since all the numbers are int, any int devision becomes double
console.log(5022222222222223/2);

//Infinity is a value in Js, So the negative Infinity
console.log(10/0);
console.log(-10/0);

//Since those are valid value within the language those can be compaired
console.log(-10/0 == -Infinity);


//Given Functions
console.log(Math.ceil(10.5));
console.log(Math.floor(10.5));

//Parsing
console.log(parseInt('10.333'))
console.log(parseFloat('10.333'))

//NaN is a special value
console.log(parseInt('banana'))

console.log(isNaN(parseInt('banana')))
console.log(isFinite(124))


//Boolean conversions
// false 0 '' NaN null undefined ===> false
console.log(Boolean(NaN))
