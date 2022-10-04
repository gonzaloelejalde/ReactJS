// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA-1l9B0HXU4v7qLrGJ0vmsLo8fV6TswgI",
    authDomain: "periferia-f1929.firebaseapp.com",
    projectId: "periferia-f1929",
    storageBucket: "periferia-f1929.appspot.com",
    messagingSenderId: "822872488221",
    appId: "1:822872488221:web:3c55247a371896f16bc9f4",
    measurementId: "G-7MD4VT18BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const storage = getStorage(app)