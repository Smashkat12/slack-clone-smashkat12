import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVPWv27L9qwqBnsb0bKzJmKd8tmPd4JqM",
  authDomain: "slack-clone-smashkat.firebaseapp.com",
  projectId: "slack-clone-smashkat",
  storageBucket: "slack-clone-smashkat.appspot.com",
  messagingSenderId: "404639803794",
  appId: "1:404639803794:web:13856110bae8f37017b94b",
  measurementId: "G-BD5TPEFBPF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
