import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBiFJFXEcgQoLaXgAPrwELGvprdnkDwoqg",
    authDomain: "react-app-note-5e273.firebaseapp.com",
    projectId: "react-app-note-5e273",
    storageBucket: "react-app-note-5e273.appspot.com",
    messagingSenderId: "250347996765",
    appId: "1:250347996765:web:6ff0fd1ddceff925da6fb4"
};

// const app = initializeApp(firebaseConfig) tenia esto por defecto pero se lo quite
firebase.initializeApp(firebaseConfig);//esta es la base de datos

const db = firebase.firestore();//referencia a firestore(Base de datos)
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();//esto es para que pueda hacer autentificacion con google


export {
    db,
    googleAuthProvider,
    firebase
}