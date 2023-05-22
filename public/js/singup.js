// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getDatabase, set, ref, update} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase. google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb-GgXSOr-RyD8oW0MtaP5VrqZ31r9n70",
  authDomain: "project-sem-d465b.firebaseapp.com",
  databaseURL: "https://project-sem-d465b-default-rtdb.firebaseio.com",
  projectId: "project-sem-d465b",
  storageBucket: "project-sem-d465b.appspot.com",
  messagingSenderId: "720547686880",
  appId: "1:720547686880:web:b99696a1ff3d5529a7e385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth();

signupbutt.addEventListener('click',(e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;


    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
     set(ref(database, 'user/' + user.uid),
      {
        username: username,
        email: email
      })
      alert('User signed up successfully')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;

      alert(errorMessage)
      // ..
    });
})

loginbutt.addEventListener('click', (e) => {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var username = document.getElementById('username').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            const dt = new Date();
            update(ref(database, 'user/' + user.uid),
                {
                    last_login: dt,
                })
            alert('User loged in successfully')
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
});

    

    
})