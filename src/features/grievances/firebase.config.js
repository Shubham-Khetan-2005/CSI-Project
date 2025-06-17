// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// require("dotenv").config()
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
// console.log(process.env.apiKey);
// console.log(process.env.REACT_APP_authDomain);

// Initialize Firebase
// export const firebaseConfig;
// export const app = initializeApp(firebaseConfig);