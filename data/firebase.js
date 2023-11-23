// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCMg8pSnpX23lCuHBWhv2tQGU092SvLCUc",
  authDomain: "projecttest-fdbb3.firebaseapp.com",
  projectId: "projecttest-fdbb3",
  storageBucket: "projecttest-fdbb3.appspot.com",
  messagingSenderId: "946042720800",
  appId: "1:946042720800:web:d69f524ddd7fb113cce245"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth = getAuth(app);