// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC3xSOLAxGc9P6EKTJr60PlVt8K-qT_tq8",
  authDomain: "webinterface-793bb.firebaseapp.com",
  projectId: "webinterface-793bb",
  storageBucket: "webinterface-793bb.appspot.com",
  messagingSenderId: "38307258777",
  appId: "1:38307258777:web:71c2dbc12881c19e227308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
