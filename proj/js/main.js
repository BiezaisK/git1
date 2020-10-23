let cities = {
  Riga: 'Rīga'
}


var obj = {}
var laiks = document.getElementById('laiks')



var majasObj = [
  {name: 'Ann', notes: [3, 5, 8]},
  {name: 'Jeanny', notes: [4, 6, 9]},
  {name: 'John', notes: [2, 7, 9]},
  {name: 'Max', notes: [1, 5, 9]},
]

var out = 'DATA'
out += `<h3>${majasObj[0].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasObj[0].notes[0]}</li>`
out += `<li>Note 2: ${majasObj[0].notes[1]}</li>`
out += `<li>Note 2: ${majasObj[0].notes[2]}</li>`
out += `</ul>`

out += `<h3>${majasObj[1].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasObj[1].notes[0]}</li>`
out += `<li>Note 2: ${majasObj[1].notes[1]}</li>`
out += `<li>Note 2: ${majasObj[1].notes[2]}</li>`
out += `</ul>`

out += `<h3>${majasObj[2].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasObj[2].notes[0]}</li>`
out += `<li>Note 2: ${majasObj[2].notes[1]}</li>`
out += `<li>Note 2: ${majasObj[2].notes[2]}</li>`
out += `</ul>`

out += `<h3>${majasObj[3].name}</h3>`
out += `<ul>`
out += `<li>Note 1: ${majasObj[3].notes[0]}</li>`
out += `<li>Note 2: ${majasObj[3].notes[1]}</li>`
out += `<li>Note 2: ${majasObj[3].notes[2]}</li>`
out += `</ul>`



document.getElementById('majasdarbs').innerHTML = out




fetch('http://127.0.0.1/api/inbox')
  .then(res => res.json())
  .then(data => callback(data))
  .catch(e => console.log(e))

  function callback(data){


    var out = `<h4 class="center">${cities[data.geoip.city] || data.geoip.city}</h4><h5 class ="center">${data.weather.currTemp}&#8451;</h5>`
     // console.log(data)//
    
      
  }
  laiks.innerHTML = out
  


  function sum(a, b){
    return a + b
    console.log(a + b)
    
    }


