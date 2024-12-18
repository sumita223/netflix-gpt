// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import {getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvMEy8uTeXjO6sBrd06ULPpzyoR1Ax1rI",
  authDomain: "netflixgpt-1444f.firebaseapp.com",
  projectId: "netflixgpt-1444f",
  storageBucket: "netflixgpt-1444f.firebasestorage.app",
  messagingSenderId: "2067126581",
  appId: "1:2067126581:web:065aea89cf458a690ed47c",
  measurementId: "G-0WZG10WEWS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics= getAnalytics(app);
export const auth = getAuth();