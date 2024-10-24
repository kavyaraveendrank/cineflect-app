import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJoWAanosXDpEE3HtoYy3g44UCGd0ZSU0",
  authDomain: "cineflectgpt.firebaseapp.com",
  projectId: "cineflectgpt",
  storageBucket: "cineflectgpt.appspot.com",
  messagingSenderId: "841936161968",
  appId: "1:841936161968:web:4a92b511accfd0bd2c3f75",
  measurementId: "G-T42FC5KJ9B"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();