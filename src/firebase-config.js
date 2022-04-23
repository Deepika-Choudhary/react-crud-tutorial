import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0z18DSoCcgfC3_lVFhHbf35-Gq6Jx1e8",
  authDomain: "crud-firebase-fb1a7.firebaseapp.com",
  projectId: "crud-firebase-fb1a7",
  storageBucket: "crud-firebase-fb1a7.appspot.com",
  messagingSenderId: "175704952636",
  appId: "1:175704952636:web:e3afd0910b898557555839",
  measurementId: "G-8M8R6VSKZG",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
