// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8yeNKGEz3pDxTb7pW9oVx3TLiGVhMuOc",
  authDomain: "secret-chef-recipe.firebaseapp.com",
  projectId: "secret-chef-recipe",
  storageBucket: "secret-chef-recipe.appspot.com",
  messagingSenderId: "841228516702",
  appId: "1:841228516702:web:86c12cb2a50aff7ba0e3cf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;