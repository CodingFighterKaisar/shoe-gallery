// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAIJD_L2areiRsh7lPYRpLoDtv4TIezP98",
    authDomain: "shoes-gallery-c1e57.firebaseapp.com",
    projectId: "shoes-gallery-c1e57",
    storageBucket: "shoes-gallery-c1e57.appspot.com",
    messagingSenderId: "16430039506",
    appId: "1:16430039506:web:d806d57de4e98ccb13080b",
    measurementId: "G-7QEE1KEE7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;