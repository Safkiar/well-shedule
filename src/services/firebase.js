import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFHfYBrE5iy6i29G9vYmty9oBffxfDtBA",
  authDomain: "well-shedule.firebaseapp.com",
  projectId: "well-shedule",
  storageBucket: "well-shedule.appspot.com",
  messagingSenderId: "276204036255",
  appId: "1:276204036255:web:f62f61b24143668c3b82aa",
  measurementId: "G-SMV08P2Q00",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
