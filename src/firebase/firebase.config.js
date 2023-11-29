// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: "AIzaSyA4t20DJ3TzBcNoYVrg13lhbhH8gvWp37Q",
  // authDomain: "inventory-management-sys-3f1da.firebaseapp.com",
  // projectId: "inventory-management-sys-3f1da",
  // storageBucket: "inventory-management-sys-3f1da.appspot.com",
  // messagingSenderId: "662657172511",
  // appId: "1:662657172511:web:c414c7abad697e087e012a"

  apiKey: import.meta.env.VITE_projectId,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_apiKey,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;