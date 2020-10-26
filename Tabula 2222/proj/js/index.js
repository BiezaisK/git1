$(function (){
   $('#save-btn').on('click', function() {
        const $form = $('user-form');
            const formData = $form.serializeArray();

            console.log(formData);
        
        if (isFormValid(form)) {
            let userList = localStorage.userList;
        
            if (userList) {
                userList = JSON.parse(userList);
            } else {
             userList = [] ;
            }
        
            console.log(formData.find((row) => row.name === 'username'));
            console.log(formData.find((row) => row.name === 'email'));
            const user = {
                username: formData.find(function(row) {return row.name === 'username'}). value,
                email: formData.find((row) => row.name === 'email'). value,
                
            };

            const userId = formData.find((row) =>row.name === ' user-id').value;
        
            userList.push(JSON.stringify(user));
            localStorage.userList = JSON.stringify(userList);
            
            console.log('can be saved')
            renderTable();
        } else {
            console.log('form not valid')
        }
        
        function isFormValid(form){
        
        }
        
        
        });
        
        function isFormValid(form){
            let isFormValid = true;
            const errorMsgBlocks = document.getElementsByClassName('error-msg');
        
            Object.values(errorMsgBlocks).forEachfunction(block)
                block.innerHTML = '';
            }
        
            const username = form.namedItem('username').value;

            if (username.lenght < 6) {
                const errorMsg = document.getElementsByClassName('error-msg username') 
                errorMsg.innerHTML = ("min 6 characters for username");
                isFormValid = false;
            }
            
            const email = form.namedItem('email').value;
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!re.test(email)) {
            
            const errorMsg = document.getElementsByClassName('error-msg email')[0]
            errorMsg.innerHTML = "Not a valid email"
            isFormValid = false;
        }
        return isFormValid;
        
        function renderTable(){
        
            const table = document.getElementById('users-table');
            const userList = localStorage.userList ? JSON.parse(localStorage.userList) : [];

            const $trExample = $('.tr-exapmle');
            $tBody.html('');
            console.trace(user);
        
            userList.forEach(function(user, index){
                user = JSON.parse(user);

                const $newTr = $trExample.first().clone().show();
                user = JSON.parse(user)
                console.log($newTr.find('username'));

                $newTr.find('.username').text(user.username);
                $newTr.find('.email').text(user.email);
                $newTr.find('.edit-btn').attr('user-id',index);
                $newTr.find('.delete-btn').attr('user-id',index);

                table.innerHTML += `
                <tr>
                <td>` +user.username+`</td>
                <td>` +user.email+`</td>
                <td>
                <button class= "edit-btn" user-id=` +index + `>Edit</button>
                <button class= "delete-btn" user-id=`+ index +`>Delete</button>
                </td>
                </tr>`
                
         })
        
         const editBtns = document.getElementsByClassName("edit-btn");
        
         Object.value(editBtns).forEach(function(btn){
             btn.addEventListener('click', function(event){
                 const userId = event.targer.getAttribute('user-id');
                 console.log("trigger edit user:"+userId);
        
                 const userList = JSON.parse(localStorage.userList);
                 let user = userList[userId];
                 user = JSON.parse(user);
                 const form = document.getElementById('user-form').elements;
        
                 form.namedItem('username').value = user.username
        
                 form.namedItem('email').value = user.email
        
                 console.log(user)
        
             })
             const table = document.getElementById('users-table');
                const tBody = table.getElementsByTagName('tbody')[0];
                const tRowToDelete = tBody.getElementsByTagName('tr')[userId];

                tRowToDelete.innerHTML = '';

                renderTable();
         })
        
         
        }})
             function responseHandler(response){
                 console.log(response)
                 $('body').append('<ul class="list"></ul>');
             
             response.data.forEach(function(user){
                 $('.list').append('<li>' + user.email + '</li>');
                 $('.list').append('<img src=' + user.avatar+'>');
             })
             
             }
             
             
                      $.ajax({
                          method: "GET",
                          url:"https://reqres.in/api/users"
                      }).done(responseHandler)
                      