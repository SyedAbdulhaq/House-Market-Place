import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDp36iXhsASbEVZf9lUQTfXeART0ylHT0c",
  authDomain: "house-market-place-8e44f.firebaseapp.com",
  projectId: "house-market-place-8e44f",
  storageBucket: "house-market-place-8e44f.appspot.com",
  messagingSenderId: "848099209765",
  appId: "1:848099209765:web:2248b3d9382710f90105cc",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
