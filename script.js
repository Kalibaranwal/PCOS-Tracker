// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAmIygMOb-Hmghq97P5QhR9108EYJFVyuI",
  authDomain: "healthcare-d6dc5.firebaseapp.com",
  projectId: "healthcare-d6dc5",
  storageBucket: "healthcare-d6dc5.firebasestorage.app",
  messagingSenderId: "1033749761881",
  appId: "1:1033749761881:web:12deb8bf47f5d898e48648",
  measurementId: "G-FGTPN2J0Y5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

document.getElementById("signin-password").addEventListener('click',function(e){

set(ref(db, 'user/' + document.getElementById("email").value),
{

email:document.getElementById("email").value,
password:document.getElementById("password").value

});
alert("Login Successful !");
})
