import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqdWn_xs2x44WkbyCgS7Drd9GAmSLIfR0",
  authDomain: "mern-ecommerce-ab607.firebaseapp.com",
  projectId: "mern-ecommerce-ab607",
  storageBucket: "mern-ecommerce-ab607.appspot.com",
  messagingSenderId: "422181875850",
  appId: "1:422181875850:web:2ebcadff9b59f8a0ea7d73"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export 
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();