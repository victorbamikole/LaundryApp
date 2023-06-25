import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEWbSHH-Zx6lYOKzPQ4ypFRoiEB6e1hRo",
  authDomain: "laundry-application-3b5fa.firebaseapp.com",
  projectId: "laundry-application-3b5fa",
  storageBucket: "laundry-application-3b5fa.appspot.com",
  messagingSenderId: "388963721339",
  appId: "1:388963721339:web:4b903d14a1449026fac2de",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
