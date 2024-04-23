// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoOtIuOHI7EPaAjbkHF_6OVNKd7_F2Vx0",
  authDomain: "ecomerce-9142b.firebaseapp.com",
  projectId: "ecomerce-9142b",
  storageBucket: "ecomerce-9142b.appspot.com",
  messagingSenderId: "537134807852",
  appId: "1:537134807852:web:8a1a5d8c1f1e82d5beca89",
  measurementId: "G-FM86EPY522",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
