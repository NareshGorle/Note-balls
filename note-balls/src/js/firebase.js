import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhXpd6nKntTp_3gHlT7CynZMM2RjtE9HE",
  authDomain: "noteballs-da873.firebaseapp.com",
  projectId: "noteballs-da873",
  storageBucket: "noteballs-da873.firebasestorage.app",
  messagingSenderId: "538510051947",
  appId: "1:538510051947:web:803b3e3d3b785e910bff2e"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth(app)

export {
    db,
    auth
}