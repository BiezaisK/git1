let cities = {
    Riga: 'Rīga'
  }

var a = 2
var b = 3

console.group('operatori')

console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)


console.log(25%7)
console.log(25/7)

console.log((25/5)+(25*1)*(100%5))

console.log(a**b)
console.log(.1+.2)

console.log(parseFloat((.1+.2).toFixed(2)))
console.groupEnd()

a += b // a = a+b => a = 5
a -= b // a = a-b => 5 - 3 = 2
a *= b // a = a*b => 2 * 3 = 6
a /= b // a = a/b =>  6 / 3 = 2

console.group('saliktie')
console.log(a)
console.groupEnd()


console.group('inkrementi/dekrementi')
console.log(a++)  // postfix increments = 2
console.log(++a)  // postfix increments = 4
console.log(++a)  // prefix increments = 5

var str1 = 'Hello'
var str2 = 'world'


console.group('string concatenation');
//console.log('Hello' + 'world')//
console.groupEnd();

console.log(str1 + '' + str2)
console.log(4 + + '8')   //  (12)
console.log(4 + 4 + '8') //  (88)
console.log(4 + '4' + 8) //  (448)
console.log(`${str1} ${str2}`) //  Hello World 
