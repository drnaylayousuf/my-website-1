

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVQMfYrjGYXZNppxq7vTpQMX8yAO6I2_A",
  authDomain: "sign-log-in-37262.firebaseapp.com",
  databaseURL: "https://sign-log-in-37262-default-rtdb.firebaseio.com",
  projectId: "sign-log-in-37262",
  storageBucket: "sign-log-in-37262.appspot.com",
  messagingSenderId: "220805914297",
  appId: "1:220805914297:web:41f9d91035628eb4fb8568"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//  console.log(app.auth);

function signup (){
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  var phonenumber = document.getElementById("Phone");
 

  // console.log( email.value, password.value,);

  var obj = {
    username: username.value,
    email: email.value,
   
}
username.value = "";
email.value = "";

password = "";

console.log(obj);


  // console.log(email.value, password.value);
  var obj = {
    username: username.value,
    email: email.value,
    
}
username.value = "";
email.value = "";


console.log(obj);
var key = Math.random() * 234590853;
firebase.database().ref("UserInformation" + Math.round(key)).set(obj);
}


firebase
.auth()
.createUserWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);


    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {

    alert( "Email verification sent!");
   
  });



  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);




  });


// }

function login(){

  var email = document.getElementById("mail");
    var password = document.getElementById("pass");


    username.value = "";
    email.value = "";
    password = "";

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    // ...
    
  firebase.auth().currentUser.sendEmailVerification()
  .then(() => {

    alert( "Email verification sent!");
   
  });

  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
}




function resetpass() {


  var email = document.getElementById("mail");

  firebase.auth().sendPasswordResetEmail(email.value)
  .then(() => {
   alert("Password reset email sent!");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });
}





function openwithgoogle() {

  var provider = new firebase.auth.GoogleAuthProvider();


  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;


    console.log(user);

    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage);


    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });

}



function getData() {
  var username = document.getElementById("username");
  var email = document.getElementById("email");
  var phonenumber = document.getElementById("Phone");

  console.log(username.value, email.value, password.value, phonenumber.value);
  // var obj = {
  //     username: username.value,
  //     email: email.value,
  //     phonenumber: phonenumber.value,
  // }
  // username.value = "";
  // email.value = "";
  // phonenumber = "";

  // console.log(obj);
//   var key = Math.random() * 234590853;
//   firebase.database().ref("UserInformation" + Math.round(key)).set(obj);
}
