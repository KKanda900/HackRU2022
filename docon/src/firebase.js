// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByylszneq8Rrf1_Xt-gEZFyU_uCeeNLjs",
    authDomain: "docon-22f57.firebaseapp.com",
    projectId: "docon-22f57",
    storageBucket: "docon-22f57.appspot.com",
    messagingSenderId: "734551972279",
    appId: "1:734551972279:web:5604f4ee63d06bb054f032"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage();

export {app, db, storage};