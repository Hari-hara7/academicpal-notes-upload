// src/firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyD4eZrk-tHYG2pVQq1Eak06xf5D9SPwIYE",
    authDomain: "academic-pal-8ae38.firebaseapp.com",
    projectId: "academic-pal-8ae38",
    storageBucket: "academic-pal-8ae38.firebasestorage.app",
    messagingSenderId: "362157551314",
    appId: "1:362157551314:web:e18eecd05078522f7fc70b"
  };

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
