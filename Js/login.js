// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCe530v_015vW941IHzrh_KfvUa4HHtrkc",
    authDomain: "retta-auth.firebaseapp.com",
    projectId: "retta-auth",
    storageBucket: "retta-auth.appspot.com",
    messagingSenderId: "432048743266",
    appId: "1:432048743266:web:2953a73cea88bd0175823b"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
    const auth = firebase.auth();




//Signin Function
let signInButton = document.getElementById("login");

signInButton.addEventListener("click", (e) =>{
e.preventDefault();
console.log("signin-click")

var email = document.getElementById("inputEmail") 
var password = document.getElementById("inputPassword") 


auth
.signInWithEmailAndPassword(email.value, password.value)
.then((userCredential) => {
    location.reload();
    // signed in
var user = userCredential.user;
console.log("user, user.mail");
window.location = "home.html";
})

.catch((error) => {
var errorCode = error.code;
var errorMessage = error.message;
console.log("error code", errorCode);
console.log("error message", errorMessage);
alert("error code", errorCode);
alert("error message", errorMessage);
})
});