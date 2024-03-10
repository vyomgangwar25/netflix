// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVeZjx23VWsfhL_qDmV_mvX8OaBlFESTk",
  authDomain: "netfilx-1718f.firebaseapp.com",
  projectId: "netfilx-1718f",
  storageBucket: "netfilx-1718f.appspot.com",
  messagingSenderId: "534571463012",
  appId: "1:534571463012:web:b33c2882747c6d9ebbca71",
  measurementId: "G-PRWMR72M26"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();