const nav = document.getElementById('nav')
  
      const menus = [
        {name: 'Home', path: '/home'},
        {name: 'Products', path: '/products'},
        {name: 'Clients', path: '/clients'},
        {name: 'About us', path: '/aboutus'},
        {name: 'Contacts', path: '/contacts'}
      ]

      var out = ''
      out += '<ul>'

      menus.forEach(menu => {
        // console.log(menu)
        out += `<li><a href="${menu.path}">${menu.name}</a></li>`
      })
      out += '</ul>'
      nav.innerHTML = out

      setInterval(() => {
        let d= new Date ()
        hours = d.getHours()
        minutes = d.getMinutes()
        seconds = d.getSeconds()
        let out = `${a(hours)}:${a(minutes)}:${a(seconds)}`
        const el = document.getElementById( 'user')
        el.innerHTML = out
        
    }, 1000);
    
    function a(b){
        return b < 10 ? `0${b}` : b
    }
    