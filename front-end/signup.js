
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    button =  document.getElementById("signup-button")
    button.addEventListener("click", signupButton);

function signupButton(event) {

form =  document.getElementById("form-1")

 if(form.checkValidity()){
    console.log("valid");
    event.preventDefault();

    window.location.href = "./users.html"

}else{
    console.log("not valid");
    return;
}
    }
});



// const loginText = document.querySelector(".title-text .login");


// const loginForm = document.querySelector("form.login");


// const loginBtn = document.querySelector("label.login");


// const signupBtn = document.querySelector("label.signup");


// const signupLink = document.querySelector("form .signup-link a");
    
// signupBtn.onclick = (()=>{
//         loginForm.style.marginLeft = "-50%";
//         loginText.style.marginLeft = "-50%";
//     });
         
// loginBtn.onclick = (()=>{
//         loginForm.style.marginLeft = "0%";
//         loginText.style.marginLeft = "0%";
//     });
         
// signupLink.onclick = (()=>{
//     signupBtn.click();
//            return false;
//    });
