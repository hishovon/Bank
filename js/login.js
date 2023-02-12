

document.getElementById("btn-submit").addEventListener('click',function(){

    const emailFiled=document.getElementById('user-email');
    const email = emailFiled.value;
 const passwordField = document.getElementById('user-pass');
 const password= passwordField.value; 

 if(email=='shovon97@gmail.com' && password==759700){
   window.location.href='bank.html';
 }

 else
 {
    alert('The password & email you enter is not matched !! Please try again.')
 }

})