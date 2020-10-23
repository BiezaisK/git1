console.log('hello world')

console.log(document.getElementById('user'))

document.getElementById('user').innerHTML = '<h1>Hello world</h1>'


window.onload = () => {
   /* document.write('Document')*/

}

/*window.alert('Hello world!')*/

console.warn('Warning')
console.error('Warning')
console.info('Warning')

var a = 1; var b = 2;

var a;
var b;

const C='hello'

function hello(a, b) {
    console.log(a+b)
}

hello(2, 3)
hello(5, 8)
hello(3, 6)

a = 2
b = 'b'
c = {}

// OOP

class Hello{
    constructor(name){
        this.name = name
    }
    sayName(){
        console.log(this.name)
    }
        
    }

class Hello2 extends Hello {
    constructor(name) {
        super(name)
    }
}

const user = new Hello('John')
const user2 = new Hello('Jake')
const user3 = new Hello('Jurijs')

console.log (user. name)
console.log (user2. name)
console.log (user3. name)

user.prototype.sayName = function(){
    console.log(this.name)
}

user2.sayName()
