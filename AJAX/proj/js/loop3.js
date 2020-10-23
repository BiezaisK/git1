const arr1 = [45, 9, 16, 25, 45]
const arr2 = [40, 5, 420, 77, 15]
const arr3 = [19, 9, 15, 10, 88]

const arr6 = arr1.map(el => el * 2)
const arr4 = arr2.map(el => el * 2)
const arr5 = arr3.map(el => el * 2)


console.log(arr1)
console.log(arr2)
console.log(arr3)

const arr7 = arr1.map((el, index) => { console.log(el, index);
return el * 2})
console.log (arr2)

console.log(arr1. filter(el => el > 20))


console.log(arr1. reduce((acc, el) => acc + el, 0))
console.log(arr1. reduce((acc, el) => acc * el, 1))


console.log(arr1. every((el) => el > 1))// True
console.log(arr1. some((el) => el > 45)) // True


console.log(arr1. find((el) => el = 45)) // 40


console.log(arr1. findIndex((el) => el = 45)) //45


console.log(arr1. find((el) => el == 7)) // Undefined

console.log(arr1. findIndex((el) => el == 7)) // -1

console.log(arr1.sort((a, b) => a - b)) //[45, 9, 16, 25, 45]

console.log(arr1.sort((a, b) => b - a)) //[45, 45, 25, 16, 9]

console.log(arr1.reverse())