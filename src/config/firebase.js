// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbAIuwNRRKD7rRFB54vY5Q5ZJ0EqKMTtI",
  authDomain: "aajl-fausto.firebaseapp.com",
  projectId: "aajl-fausto",
  storageBucket: "aajl-fausto.appspot.com",
  messagingSenderId: "416230555763",
  appId: "1:416230555763:web:3e54fb3719f65a256b2a06",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export const passwordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const confirmPasswordReset = async (code, password) => {
  if (!code || !password)
    return Promise.reject("code and password are required");
  return await confirmPasswordReset(auth, code, password);
};
