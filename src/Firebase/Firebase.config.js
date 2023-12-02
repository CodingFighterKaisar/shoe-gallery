// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1ewmKyX9irgJdIwlrah23DvqisKZj3c4",
    authDomain: "shoes-gallery-3746d.firebaseapp.com",
    projectId: "shoes-gallery-3746d",
    storageBucket: "shoes-gallery-3746d.appspot.com",
    messagingSenderId: "344402682458",
    appId: "1:344402682458:web:17fa4b7a080effeb20ee63"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;