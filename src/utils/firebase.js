// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbaojGXKzPS2gJIcB7cYyPgssd3bywSnU",
  authDomain: "netflixgt-edecb.firebaseapp.com",
  projectId: "netflixgt-edecb",
  storageBucket: "netflixgt-edecb.firebasestorage.app",
  messagingSenderId: "140145477834",
  appId: "1:140145477834:web:2a805c282c61519464cc33",
  measurementId: "G-4WVC650Q1M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();