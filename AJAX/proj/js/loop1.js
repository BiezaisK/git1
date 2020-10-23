function renderTable(obj){
  data = obj
  let out = ''
  let j = 0

  var arrLength = obj.length
  // for(let i = 0; i < arrLength; i++){
  //   out += `<h3>${obj[i].title}</h3>
  //     <p>${obj[i].body}</p>`
  // }

  while(j < arrLength){
    out += `<h3>${obj[j].title}</h3>
      <p>${obj[j].body}</p>
      <p>post ID: ${obj[j].id}</p>`
    j++ // j = j + 1, j += 1
  }

  
  posts.innerHTML = out
}