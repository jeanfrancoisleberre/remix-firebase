import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAK8ITLSiZX0hJCBdfE_KS3C4X-4IPKbBU",
    authDomain: "remix-auth-436719.firebaseapp.com",
    projectId: "remix-auth-436719",
    storageBucket: "remix-auth-436719.appspot.com",
    messagingSenderId: "726729347107",
    appId: "1:726729347107:web:35dfbfa6ae37eb4fff2196",
    measurementId: "G-GFJVG6VSV6"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);