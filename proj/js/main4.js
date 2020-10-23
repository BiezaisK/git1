var arr = [
    1, //index = 0
    2, //index = 1
    3, //index = 2
    4, //index = 3
]
const clk = document.querySelector('#clock')

var car = {
color: 'white',
wheels: 4,
makeBeep: function(){
    console.log('Beep')
}
}

var parametrs = 'wheels'
console.log(car.color)
console.log(car['wheels'])

//var d = new Date ()//

var person = {
    name: 'Jane',
    age: 24,
    greet() {
        console.log (`Hello, I am ${this.name} and I am ${this.age} years old`)
        return this.age
    },
    
}

setInterval(()=> {
    makeTime(clk)
  }, 1000)
  
  function render(num){
    res.innerHTML = content[num]
  }
  
  function makeTime(el){
    const norm = a => a < 10 ? `0${a}` : a
    let d = new Date()
    let hs = d.getHours()
    let ms = d.getMinutes()
    let ss = d.getSeconds()
    if(el){
      el.innerHTML = `${norm(hs)}:${norm(ms)}:${norm(ss)}`
   
    }
  }
  