// hoisting

// undefined


console.log('a' , a)
var a = 1; // undefined
console.log('a', a)


/*for(var i=0; i<6; i++){
    setTimeout(function(){
        console.log('var', i)
    }, 0)
}
for(let k=0; k<6; k++){
    setTimeout(function(){
        console.log('let', k)
    }, 0)
}*/

// String
// '', ""//


let str = 'Hello Andrews home!'
console.log('String', str)

let num = 2
let num2 = 2.34
let num3 = .345
let num4 = 6.654e2
console.table('numbers', num, num2, num3, num4)

let bool=true
let bool2=false

console.log('Boolean:' , bool, bool2)
let nul = null
let undef= undefined
let nan=NaN

console.log(isNaN(9 / 'hello'))
console.log(NaN==(9 / 'hello'))
console.log(NaN==NaN)

let arr = [1,2,3,4,5,6]
let arr2 = new Array() //iesaka neizmantot

let obj = {} // object
let obj2 = obj
console.log(obj==obj2)

let aa= 1
let ba = 1
console.log(aa==ba)

console.log('number', typeof ba) //sanem number iekš konsoles
console.log('object', typeof obj) //sanem number iekš konsoles
console.log('Array', typeof arr) //sanem number iekš konsoles


for(var i=0; i<6; i++){
    setTimeout(function(){
        console.log('var', i)
    }, 0 )
}
for(let k=0; k<6; k++){
    setTimeout(function(){
        console.log('let', k)
    }, 0 )
}