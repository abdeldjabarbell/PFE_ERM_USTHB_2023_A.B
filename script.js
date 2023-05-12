const form =document.getElementById('form');
const username =document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordconfirm = document.getElementById('passwordconfirm');
const errorDispaly=inputControl.getElementById('.error');

errorDispaly.innertext = message;
inputControl.classList.add('error');
inputControl.classList.remove('success');

const setSuccess = element => {
 const inputControl = element.parentElement;
 const errorDispaly = inputControl.queryselector('.error');
 errorDispaly.innertext='';
 inputControl.classList.add("success");

};



form.addEventListener('submit',e=> {
    e.preventDefault();
    ValidityState();
});
const ValidityState =() => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const passwordconfirmValue = passwordconfirm.value.trim();


if(usernameValue === ''){
setError(username,'username is requird')
}else{
setSuccess(username);
}

if(passwordValue === ''){
setError(password,'username is requird')
}else{
setSuccess(password);
}

if(emailValue === ''){
setError(email,'username is requird')
}else{
setSuccess(email);
}

if(passwordconfirmValue === ''){
setError(passwordconfirm,'username is requird')
}else{
setSuccess(passwordconfirm);
}

}

