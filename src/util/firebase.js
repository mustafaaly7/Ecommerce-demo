// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore,addDoc,collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBphvJ4CpXbg8Uu0vFEK8Le4ioVpcwZ4IY",
  authDomain: "ecommerce-demo-clone.firebaseapp.com",
  projectId: "ecommerce-demo-clone",
  storageBucket: "ecommerce-demo-clone.appspot.com",
  messagingSenderId: "1074068590361",
  appId: "1:1074068590361:web:69399cce2f22f2f5583f88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export{
app,
auth, createUserWithEmailAndPassword, signInWithEmailAndPassword
,db,addDoc,collection

}