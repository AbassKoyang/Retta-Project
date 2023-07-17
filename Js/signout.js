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
        window.location = "index.html"
    }
  })


//   Sign Out Modal 



//   sing out function
let signOutButton = document.getElementById("signout")
signOutButton.addEventListener("click", (e) =>{
    e.preventDefault();
    console.log("signOut Clicked");
    confirm('Do you want to sign out?')
    auth.signOut();
    window.location = "index.html"

})


// var signOutButton2 = document.getElementsByClassName('sign__out__button')
// var modal = document.getElementsByClassName('modal')

// signOutButton2.addEventListener('click', ()=>{
//     modal.style.display ='none';
//     setTimeout(() => {
//         modal.style.display ='none';
//     }, 2000);
// });

