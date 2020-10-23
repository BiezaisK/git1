var majasObj = [
    {name: 'Jana', notes: [3, 5, 8]},
    {name: 'Aldis', notes: [4, 6, 9]},
    {name: 'Janis', notes: [2, 7, 9]},
    {name: 'Maksis', notes: [1, 5, 9]},
  ]
  
var out = ''
out += `<h3>${majasObj[0].name}</h3>`
out += `<ul>`
out += `<li>Dati 1: ${majasObj[0].notes[0]}</li>`
out += `<li>Dati 2: ${majasObj[0].notes[1]}</li>`
out += `<li>Dati 3: ${majasObj[0].notes[2]}</li>`
out += `</ul>`
out += `<h3>${majasObj[1].name}</h3>`
out += `<ul>`
out += `<li>Dati 1: ${majasObj[1].notes[0]}</li>`
out += `<li>Dati 2: ${majasObj[1].notes[1]}</li>`
out += `<li>Dati 3: ${majasObj[1].notes[2]}</li>`
out += `</ul>`
out += `<h3>${majasObj[2].name}</h3>`
out += `<ul>`
out += `<li>Dati 1: ${majasObj[2].notes[0]}</li>`
out += `<li>Dati 2: ${majasObj[2].notes[1]}</li>`
out += `<li>Dati 3: ${majasObj[2].notes[2]}</li>`
out += `</ul>`
out += `<h3>${majasObj[3].name}</h3>`
out += `<ul>`
out += `<li>Dati 1: ${majasObj[3].notes[0]}</li>`
out += `<li>Dati 2: ${majasObj[3].notes[1]}</li>`
out += `<li>Dati 3: ${majasObj[3].notes[2]}</li>`
out += `</ul>`

document.getElementById('majasdarbs').innerHTML = out


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

const user = new Hello('Jana')
const user2 = new Hello('Aldis')
const user3 = new Hello('Janis')
const user4 = new Hello('Maksis')

console.log (user. name)
hello(0, 3)
hello(2, 3)
hello(5, 3)
console.log (user2. name)
hello(2, 2)
hello(3, 3)
hello(6, 3)
console.log (user3. name)
hello(2, 1)
hello(5, 2)
hello(3, 6)
console.log (user4. name)
hello(1, 0)
hello(3, 2)
hello(3, 6)

var a = 1; var b = 2;

var a;
var b;

const C='hello'

function hello(a, b) {
    console.log(a+b)
}


a = 2
b = 'b'
c = {}
user.prototype.sayName = function(){
  console.log(this.name)
}

user2.sayName()
