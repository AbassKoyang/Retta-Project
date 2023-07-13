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



  auth.onAuthStateChanged(function (user){
    if(user){
        var email = user.email
        var user = document.getElementById("user");
        var text = document.createTextNode(email);
        user.appendChild(text);
        console.log(user)
    }
    else{
        alert("User not authenticated, kindly sign up.")
        window.location = "index.html"
    }
  })
  auth.onAuthStateChanged(function (user){
    if(user){
       var inputNamed = document.getElementById('inputName')
        var fullName = inputNamed.fullName
        var fullName = document.getElementById("fullname");
        var text = document.createTextNode(fullName);
        user.appendChild(text);
        console.log(fullName)
    }
    else{
        alert("User not authenticated, kindly sign up.")
        window.location = "index.html"
    }
  })

//   sing out function
let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signOut Clicked");
    auth.signOut();
    alert("Signed Out");
    window.location = "index.html"

})