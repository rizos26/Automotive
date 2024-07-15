// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGJNfSvJ-BChJAPJPgyixGsTELJYcwR2I",
  authDomain: "automotiveweb-ba9b8.firebaseapp.com",
  projectId: "automotiveweb-ba9b8",
  storageBucket: "automotiveweb-ba9b8.appspot.com",
  messagingSenderId: "398397571511",
  appId: "1:398397571511:web:08325adae0f817bd5b6832",
  measurementId: "G-M015JDNR89"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default appFirebase;