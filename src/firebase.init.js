// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APP_APP_APIKEY,
  authDomain: process.env.APP_AUTHDOMAIN,
  projectId: process.env.APP_PROJECTID,
  storageBucket: process.env.APP_STORAGEBUCKET,
  messagingSenderId: process.env.APP_MESSAGINGSENDERID,
  appId: process.env.APP_APPID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;