const Name = document.getElementById('name')
const email=document.getElementById('email')
const phone=document.getElementById('phone')
const form = document.getElementById('form')
const errorName = document.getElementById('errorname')
const errorEmail = document.getElementById('erroremail')
const errorPhone = document.getElementById('errorphone')
form.addEventListener('submit', (e) => {
  let messages = ''
  if (Name.value === '' || Name.value == null) {
    messages='Name is required, Please Enter Your Correct Name'
    errorName.innerText = messages;
  }
  if(email.value === '' || email.value == null){
    messages='Email is required, Please Enter Your Correct Email'
    errorEmail.innerText = messages;
  }
  if(phone.value === '' || phone.value == null){
    messages='Mobile Number is required, Please Enter Your Number'
    errorPhone.innerText = messages;
  }
  if(phone.value.length !=10 ){
    messages=' Please Enter Your Correct Phone No.'
    errorPhone.innerText = messages;
  }

  if (messages.length > 0) {
    e.preventDefault()
    
  }
    setTimeout(function(){errorName.innerHTML=""},2000)
           

    setTimeout(function(){errorEmail.innerHTML=""},2000)
           

    setTimeout(function(){errorPhone.innerHTML=""},2000)
            // form.reset()          


})
