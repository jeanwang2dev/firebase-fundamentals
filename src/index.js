import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebasApp = initializeApp({
    apiKey: "AIzaSyCaNoaaQLEty9JBx68ojfYtPBkWC18xv5g",
    authDomain: "try-firebase-project.firebaseapp.com",
    projectId: "try-firebase-project",
    storageBucket: "try-firebase-project.appspot.com",
    messagingSenderId: "463430045593",
    appId: "1:463430045593:web:85fb490af9ccef85cb8d08",
    measurementId: "G-CLE9WTLTNJ"
});

const auth = getAuth();

// Detect auth state
onAuthStateChanged(auth, user => {
    if(user != null ){
        console.log('logged in');
    } else {
        console.log('No user');
    }
});