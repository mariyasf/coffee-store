import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvcMui-laBaQ8FolTiIizyFHHqp499N1c",
    authDomain: "coffee-store-84dbb.firebaseapp.com",
    projectId: "coffee-store-84dbb",
    storageBucket: "coffee-store-84dbb.appspot.com",
    messagingSenderId: "624295515809",
    appId: "1:624295515809:web:dbd5d6a941ef68f7e542e0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
