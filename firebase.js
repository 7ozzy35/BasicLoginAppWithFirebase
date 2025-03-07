// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHM1rEj5ETcnPipbRBVwfbXR8X2vbEyjg",
  authDomain: "login-6e8f1.firebaseapp.com",
  projectId: "login-6e8f1",
  storageBucket: "login-6e8f1.firebasestorage.app",
  messagingSenderId: "16551761301",
  appId: "1:16551761301:web:4721287a27adbbe12f129c",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
export { auth };
