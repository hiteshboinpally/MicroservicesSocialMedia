// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6dt6TuE3YyywdSDEaRpe0e9b-DZ4tznA",
  authDomain: "microservices-project-34252.firebaseapp.com",
  projectId: "microservices-project-34252",
  storageBucket: "microservices-project-34252.appspot.com",
  messagingSenderId: "117540521750",
  appId: "1:117540521750:web:b33be6535df59b839d7237",
  measurementId: "G-28M6K5E11H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const googleProvider = new GoogleAuthProvider();