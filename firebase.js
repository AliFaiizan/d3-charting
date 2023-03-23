import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCY30P5vSRGmSfWYMrN7bF_VHDL7m3Mbtc",
  authDomain: "d3-demo-be164.firebaseapp.com",
  projectId: "d3-demo-be164",
  storageBucket: "d3-demo-be164.appspot.com",
  messagingSenderId: "922546268387",
  appId: "1:922546268387:web:7c8990150566bbe549fdd6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;
