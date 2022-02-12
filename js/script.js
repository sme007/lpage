
var email = document.forms['form']['email'];
var contact = document.forms['form']['contact'];

var email_error = document.getElementById('email_error');
var contact_error = document.getElementById('contact_error');

email.ad
email.addEventListener('textInput', email_verify);
contact.addEventListener('textInput', contact_verify);


function validated() {
    if(email.value.length < 9) {
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }    
    if(contact.value.length < 6) {
        contact.style.border = "1px solid red";
        contact_error.style.display = "block";
        contact.focus();
        return false;
    }    
}

function email_verify() {
    if(email.value.length >= 8) {
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;        
    }
}
function contact_verify() {
    if(contact.value.length > 8) {
        contact.style.border = "1px solid silver";
        contact_error.style.display = "none";
        return true;        
    }
}