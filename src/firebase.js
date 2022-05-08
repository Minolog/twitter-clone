// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAS3_ShTapezOSeHfR18kIvIKJAeGakQpo",
  authDomain: "twitter-clone-18cd9.firebaseapp.com",
  projectId: "twitter-clone-18cd9",
  storageBucket: "twitter-clone-18cd9.appspot.com",
  messagingSenderId: "548184688250",
  appId: "1:548184688250:web:72eb38b510f54052c11dc3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;