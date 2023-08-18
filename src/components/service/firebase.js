// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJk3ol1P6M5-dcQa1vQZuAzIYJ-O8npYY",
  authDomain: "lite-store-46b82.firebaseapp.com",
  projectId: "lite-store-46b82",
  storageBucket: "lite-store-46b82.appspot.com",
  messagingSenderId: "810630649858",
  appId: "1:810630649858:web:951b94c44bbfec80852f1b",
  measurementId: "G-BY3V516CXC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)