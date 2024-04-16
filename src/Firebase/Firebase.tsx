// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

// const firebaseConfig = {
//   apiKey: 'AIzaSyDFZAUEeELBs_ExLjW663mgajAvCIaXpuc',
//   authDomain: 'sihtk-bilamsa-83389.firebaseapp.com',
//   projectId: 'sihtk-bilamsa-83389',
//   storageBucket: 'sihtk-bilamsa-83389.appspot.com',
//   messagingSenderId: '835475524990',
//   appId: '1:835475524990:web:a12a929e4d1df7e7f6372f',
//   measurementId: 'G-QVKYEJTWDS'
// };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const imgDB = getStorage(app);
export const db = getFirestore(app);
