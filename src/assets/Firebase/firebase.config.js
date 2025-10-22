// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// DANGER

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey: import.meta.env.VITE_apiKey,
    // authDomain: import.meta.env.VITE_authDomain,
    // projectId: import.meta.env.VITE_projectId,
    // storageBucket: import.meta.env.VITE_storageBucket,
    // messagingSenderId: import.meta.env.VITE_messagingSenderId,
    // appId: import.meta.env.VITE_appId,
    apiKey: "AIzaSyD0VOCY_JD989SMOkRzoDz3rOQ-XGut4wI",
    authDomain: "indoor-plant-care-and-store.firebaseapp.com",
    projectId: "indoor-plant-care-and-store",
    storageBucket: "indoor-plant-care-and-store.firebasestorage.app",
    messagingSenderId: "468236567707",
    appId: "1:468236567707:web:0ff3fcd4239ae38a59f23e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);