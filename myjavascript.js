
// Form validation

funtion validateEmail() {
    let emailID = document.contactForm.email.value;
    let atpos = emailID.indexof("@");
    let dotpos = emailID.indexof(".");

    if (atpos < 1 || ( dotpos - atpos < 2)) {
        alert("Please enter a valid email address")
        document.contactForm.email.focus() ;
        return false;
    }
    return(true);
}