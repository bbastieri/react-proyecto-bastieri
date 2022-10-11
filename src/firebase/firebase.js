import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFnK_Rex4uFigGyPBDdsEPv7v6EW_PnQ8",
  authDomain: "react-proyecto-7ce27.firebaseapp.com",
  projectId: "react-proyecto-7ce27",
  storageBucket: "react-proyecto-7ce27.appspot.com",
  messagingSenderId: "598133293454",
  appId: "1:598133293454:web:6d4e91945204a3ee8a64df"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)