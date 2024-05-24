import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARcYEwvHc0RzSdkchj7F7SUpZyrDYCVPY",
  authDomain: "expense-tracker-b3420.firebaseapp.com",
  projectId: "expense-tracker-b3420",
  storageBucket: "expense-tracker-b3420.appspot.com",
  messagingSenderId: "330752937944",
  appId: "1:330752937944:web:82a0442b3215e6c474acad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);