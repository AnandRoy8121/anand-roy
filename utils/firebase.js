// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI5L8kG1Sxxk81NHfJGcXsVNbY8Y_K9lU",
    authDomain: "portfolio-a33c3.firebaseapp.com",
    projectId: "portfolio-a33c3",
    storageBucket: "portfolio-a33c3.firebasestorage.app",
    messagingSenderId: "173783074268",
    appId: "1:173783074268:web:c540a6e1ec6e5f5cca3b19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
