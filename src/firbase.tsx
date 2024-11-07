import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAwSaZOnMZPr04eGRNTHKc09G61EcCBGsk",
  authDomain: "main-site-2dd59.firebaseapp.com",
  projectId: "main-site-2dd59",
  storageBucket: "main-site-2dd59.firebasestorage.app",
  messagingSenderId: "495980014911",
  appId: "1:495980014911:web:dd5575010026aeca48f78a",
  measurementId: "G-M59JCMMFTS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);