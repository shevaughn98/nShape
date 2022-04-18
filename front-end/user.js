// Authentication Stuff

// const { response } = require("express");

// const url = "http://localhost:8085/signup";

// let token = "thisisatoken";

// fetch(url, {
//     headers:{
//         Authorization: `Bearer ${token}`,
//     },
// })
// .then((response) => response.json())
// .then((data) => console.log(data));

// const signUpForm = document.getElementById(card);
// signUpForm.addEventListener('submit', function async (event) {
//     event.preventDefault();

//     const data = new FormData(event.target);
    
//     const email = data.get("email");
//     const password = data.get("password");
//     console.log(email, password );

//     const response = await fetch("/signup", {
//         method: "POST",
//         headers: { 
//             "content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             email,
//             password,
//         }),

//     })
// });


