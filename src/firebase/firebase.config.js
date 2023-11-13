// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "book-store-application-b6dd0.firebaseapp.com",
  projectId: "book-store-application-b6dd0",
  storageBucket: "book-store-application-b6dd0.appspot.com",
  messagingSenderId: "275677055110",
  appId: "1:275677055110:web:c4625fea9f683649f1a907",
  measurementId: "G-XR3D6CSRKQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;