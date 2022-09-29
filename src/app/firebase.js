// import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';
// import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_PROJECT_ID + '.firebaseapp.com',
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_PROJECT_ID + ".appspot.com",
// };

// const firebaseApp = initializeApp(firebaseConfig);
// export const db = getFirestore();
// export const auth = getAuth(firebaseApp);

// // Si descomentas la siguiente línea, cuando mientras que el usuario no se desloguee expresamente o cierre el navegador, permanecerá logueado y podremos acceder a su id desde cualquier página
// setPersistence(auth, browserLocalPersistence);

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);