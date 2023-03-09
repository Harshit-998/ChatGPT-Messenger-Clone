import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyByJ6SJeRL4E7HZYN0gwDotJswLGWvYyek",
  authDomain: "chatgpt-messenger-5d18d.firebaseapp.com",
  projectId: "chatgpt-messenger-5d18d",
  storageBucket: "chatgpt-messenger-5d18d.appspot.com",
  messagingSenderId: "704526000753",
  appId: "1:704526000753:web:2309d9bd18e7bf5dcf31d0",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
