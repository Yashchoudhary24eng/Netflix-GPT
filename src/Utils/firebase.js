// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCimmhZFAci5ui6FBiokQswEMvI7tYvdlM",
  authDomain: "netflixgpt-6ec3c.firebaseapp.com",
  projectId: "netflixgpt-6ec3c",
  storageBucket: "netflixgpt-6ec3c.firebasestorage.app",
  messagingSenderId: "648032240221",
  appId: "1:648032240221:web:af1ef298b70ce1c69a03b4",
  measurementId: "G-DBNLSGETZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();