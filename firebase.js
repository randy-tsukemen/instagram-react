// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAETwlN7QsBeHJ3D5wo96-LRmGhagWou1E",
  authDomain: "vtuber-c174f.firebaseapp.com",
  projectId: "vtuber-c174f",
  storageBucket: "vtuber-c174f.appspot.com",
  messagingSenderId: "57224290588",
  appId: "1:57224290588:web:71f532db5c3bd1b20ddad9",
  measurementId: "G-YKMC9QSN74",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
const analytics = getAnalytics(app);

export { app, db, storage, analytics };
